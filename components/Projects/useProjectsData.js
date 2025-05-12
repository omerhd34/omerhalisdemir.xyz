import { useMemo, useCallback } from "react";
import metalDedector from "../../public/MetalDedector.png";
import arduino1 from "../../public/arduino1.jpg";
import arduino2 from "../../public/arduino2.jpg";
import arduino3 from "../../public/arduino3.jpg";
import chiptest from "../../public/chiptest.jpg";
import fsd from "../../public/fsd.jpeg";
import { content } from "./localization";

export function useProjectsData(language, filter) {
  const getProjectInfo = useCallback(
    (projectId, field) => {
      const projectInfo = content[language].projects.find(
        (p) => p.id === projectId
      );
      return projectInfo ? projectInfo[field] : "";
    },
    [language]
  );

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: language === "tr" ? "METAL DEDEKTÖR" : "METAL DETECTOR",
        category: "electric_electronics",
        image: metalDedector,
        images: [metalDedector],
        description: getProjectInfo(1, "description"),
        technologies: ["Proteus", "Autodesk Eagle"],
      },
      {
        id: 2,
        title:
          language === "tr"
            ? "ARDUINO UNO BELLEK GÜÇLENDİRME"
            : "ARDUINO UNO MEMORY ENHANCEMENT",
        category: "electric_electronics",
        image: chiptest,
        images: [arduino1, arduino2, arduino3],
        description: getProjectInfo(2, "description"),
        technologies: ["Arduino IDE", "Autodesk Eagle"],
      },
      {
        id: 3,
        title:
          language === "tr"
            ? "Kişisel Portföy Web Sitesi"
            : "Personal Portfolio Website",
        category: "frontend",
        image: fsd,
        images: [],
        description: getProjectInfo(3, "description"),
        technologies: ["React", "Next.js", "Tailwind CSS"],
        demoLink: "/",
        githubLink: "https://github.com/omerhd34/omerhalisdemir.xyz",
      },
    ],
    [language, getProjectInfo]
  );

  const filteredProjects = useMemo(() => {
    return filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);
  }, [filter, projects]);

  return { projects, filteredProjects, content };
}
