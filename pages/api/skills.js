// pages/api/skills.js

import mysql from "mysql2/promise";

export default async function handler(req, res) {
  // Get user's requested language (default: tr)
  const { lang = "tr" } = req.query;

  try {
    // Create MySQL connection
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Determine table names based on language selection
    const tables = {
      tr: {
        categories: "kategoriler",
        categoryId: "kategori_id",
        categoryName: "kategori_adi",
        skills: "yetenekler",
        skillId: "yetenek_id",
        skillName: "yetenek_adi",
        skillIcon: "yetenek_ikonu",
        proficiency: "yeterlilik_yuzdesi",
      },
      en: {
        categories: "categories",
        categoryId: "category_id",
        categoryName: "category_name",
        skills: "skills",
        skillId: "skill_id",
        skillName: "skill_name",
        skillIcon: "skill_icon",
        proficiency: "proficiency_percentage",
      },
    };

    // Check for valid language option
    if (!tables[lang]) {
      return res.status(400).json({ error: "Unsupported language option" });
    }

    const table = tables[lang];

    // Create query
    const query = `
      SELECT 
        c.${table.categoryId},
        c.${table.categoryName},
        s.${table.skillId},
        s.${table.skillName},
        s.${table.skillIcon},
        s.${table.proficiency}
      FROM 
        ${table.categories} c
      INNER JOIN 
        ${table.skills} s ON c.${table.categoryId} = s.${table.categoryId}
      ORDER BY 
        c.${table.categoryId}, s.${table.skillId}
    `;

    // Execute query
    const [rows] = await connection.execute(query);

    // Transform data to the format expected by frontend
    const result = {
      frontendSkills: [],
      backendSkills: [],
      electricElectronicSkills: [],
    };

    // Separate data by categories
    rows.forEach((row) => {
      const skillItem = {
        name: row[table.skillName],
        percentage: row[table.proficiency],
        icon: row[table.skillIcon],
      };

      // Add to the appropriate array based on category ID
      if (row[table.categoryId] === 1) {
        result.frontendSkills.push(skillItem);
      } else if (row[table.categoryId] === 2) {
        result.backendSkills.push(skillItem);
      } else if (row[table.categoryId] === 3) {
        result.electricElectronicSkills.push(skillItem);
      }
    });

    // Close connection
    await connection.end();

    // Return successful response
    res.status(200).json(result);
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({
      error: "Database query failed",
      details: error.message,
    });
  }
}
