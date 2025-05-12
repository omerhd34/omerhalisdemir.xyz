import { useCallback } from "react";
import TEPAS from "../../public/tepas.jpg";
import IXIRHOST from "../../public/ixirhost.png";
import EUROPCODING from "../../public/europcoding.png";
import CERTIFICATE from "../../public/Sertifika.png";
import ACHIEVEMENT from "../../public/UstunBasari.png";
import { content } from "./localization";

export function useExperienceData(language) {
  const getDocTitle = useCallback(
    (docId) => {
      return content[language].documentTitles[docId] || docId;
    },
    [language]
  );

  const experiences = [
    {
      id: 1,
      title: language === "tr" ? "Stajyer" : "Intern",
      company:
        language === "tr"
          ? "Tepaş Mühendislik İnşaat San. ve Tic. Ltd. Şti."
          : "TEPAŞ",
      companyLink: "http://www.tepasmuhendislik.com.tr/",
      period: "2020 (1 " + (language === "tr" ? "ay" : "month") + ")",
      description: content[language].tepasDescription,
      achievements: content[language].tepasAchievements,
      logo: TEPAS,
    },
    {
      id: 2,
      title: language === "tr" ? "Stajyer" : "Intern",
      company:
        language === "tr"
          ? "IXIRHOST | İksir İnternet Hizmetleri A.Ş."
          : "IXIRHOST",
      companyLink: "https://www.ixirhost.com/",
      period: "2021 (1 " + (language === "tr" ? "ay" : "month") + ")",
      description: content[language].ixirhostDescription,
      achievements: content[language].ixirhostAchievements,
      logo: IXIRHOST,
    },
    {
      id: 3,
      title:
        language === "tr"
          ? "Tam Yığın Geliştirici (Full Stack Developer)"
          : "Full Stack Developer",
      company: "EUROPCODING SCHOOL",
      companyLink: "https://europecodingschool.com/",
      period: "2024 (6 " + (language === "tr" ? "ay" : "months") + ")",
      description: content[language].europcodingDescription,
      achievements: content[language].europcodingAchievements,
      logo: EUROPCODING,
      documents: [
        {
          id: "transcript",
          title: getDocTitle("transcript"),
          type: "pdf",
          pdfPath: "/Transcript.pdf",
        },
        {
          id: "certificate",
          title: getDocTitle("certificate"),
          type: "image",
          image: CERTIFICATE,
        },
        {
          id: "achievement",
          title: getDocTitle("achievement"),
          type: "image",
          image: ACHIEVEMENT,
        },
      ],
    },
  ];

  return { experiences };
}
