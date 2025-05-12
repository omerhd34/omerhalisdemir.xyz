import { useCallback } from "react";

export function useSkillsAnimation(skills, setAnimatedSkills, loading) {
  return useCallback(() => {
    if (loading) return;

    const animationDuration = 1500;
    const steps = 20;
    const interval = animationDuration / steps;

    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      const currentAnimatedData = {
        frontendSkills: skills.frontendSkills.map((skill) => ({
          ...skill,
          percentage: Math.round(skill.percentage * progress),
        })),
        backendSkills: skills.backendSkills.map((skill) => ({
          ...skill,
          percentage: Math.round(skill.percentage * progress),
        })),
        electricElectronicSkills: skills.electricElectronicSkills.map(
          (skill) => ({
            ...skill,
            percentage: Math.round(skill.percentage * progress),
          })
        ),
      };

      setAnimatedSkills(currentAnimatedData);

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedSkills(skills);
      }
    }, interval);
  }, [loading, skills, setAnimatedSkills]);
}
