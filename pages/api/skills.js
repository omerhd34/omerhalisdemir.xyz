import mysql from "mysql2/promise";

export default async function handler(req, res) {
  // Kullanıcının istediği dili al (varsayılan: tr)
  const { lang = "tr" } = req.query;

  try {
    // MySQL bağlantısını oluştur
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // Dil seçimine göre tablo adlarını belirle
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

    // Geçerli dil seçeneği kontrolü
    if (!tables[lang]) {
      return res.status(400).json({ error: "Desteklenmeyen dil seçeneği" });
    }

    const table = tables[lang];

    // Sorgu oluştur
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

    // Sorguyu çalıştır
    const [rows] = await connection.execute(query);

    // Verileri frontend'in beklediği formata dönüştür
    const result = {
      frontendSkills: [],
      backendSkills: [],
      electricElectronicSkills: [],
    };

    // Verileri kategorilere göre ayır
    rows.forEach((row) => {
      const skillItem = {
        name: row[table.skillName],
        percentage: row[table.proficiency],
        icon: row[table.skillIcon],
      };

      // Kategori ID'sine göre ilgili diziye ekle
      if (row[table.categoryId] === 1) {
        result.frontendSkills.push(skillItem);
      } else if (row[table.categoryId] === 2) {
        result.backendSkills.push(skillItem);
      } else if (row[table.categoryId] === 3) {
        result.electricElectronicSkills.push(skillItem);
      }
    });

    // Bağlantıyı kapat
    await connection.end();

    // Başarılı yanıt döndür
    res.status(200).json(result);
  } catch (error) {
    console.error("API hatası:", error);
    res.status(500).json({
      error: "Veritabanı sorgusu başarısız oldu",
      details: error.message,
    });
  }
}
