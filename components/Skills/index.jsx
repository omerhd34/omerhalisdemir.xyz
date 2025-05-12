import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext/LanguageContext';
import SkillCard from './SkillCard';
import SkillsHeader from './SkillsHeader';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import { useSkillsAnimation } from './useSkillsAnimation';
import { content } from './localization';

export default function Skills() {
 const { language } = useLanguage();
 const [skills, setSkills] = useState({
  frontendSkills: [],
  backendSkills: [],
  electricElectronicSkills: []
 });
 const [animatedSkills, setAnimatedSkills] = useState({
  frontendSkills: [],
  backendSkills: [],
  electricElectronicSkills: []
 });
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const skillsRef = useRef(null);
 const hasAnimated = useRef(false);

 // Reset animation state when language changes
 useEffect(() => {
  hasAnimated.current = false;
 }, [language]);

 // Fetch skills data when language changes
 useEffect(() => {
  const fetchSkills = async () => {
   try {
    setLoading(true);
    const response = await fetch(`/api/skills?lang=${language}`);

    if (!response.ok) {
     throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    setSkills(data);

    // Initialize animated data with 0% progress
    const initialAnimatedData = {
     frontendSkills: data.frontendSkills.map(skill => ({ ...skill, percentage: 0 })),
     backendSkills: data.backendSkills.map(skill => ({ ...skill, percentage: 0 })),
     electricElectronicSkills: data.electricElectronicSkills.map(skill => ({ ...skill, percentage: 0 }))
    };

    setAnimatedSkills(initialAnimatedData);
    setLoading(false);
   } catch (err) {
    console.error('Error fetching data:', err);
    setError(err.message);
    setLoading(false);
   }
  };

  fetchSkills();
 }, [language]);

 // Use the custom hook for animations
 const animateSkillBars = useSkillsAnimation(skills, setAnimatedSkills, loading);

 // Set up intersection observer for scroll-based animation
 useEffect(() => {
  const observer = new IntersectionObserver(
   (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !hasAnimated.current) {
     setTimeout(() => {
      animateSkillBars();
      hasAnimated.current = true;
     }, 500);
    }
   },
   { threshold: 0.1 }
  );

  if (skillsRef.current && !loading) {
   observer.observe(skillsRef.current);
  }

  return () => {
   if (skillsRef.current) {
    observer.unobserve(skillsRef.current);
   }
  };
 }, [loading, animateSkillBars]);

 const animationStyles = `
    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    .animate-card-1 {
      animation: slideInFromLeft 0.8s ease-out forwards;
    }
    
    .animate-card-2 {
      animation: slideInFromLeft 0.8s ease-out 0.2s forwards;
      opacity: 0; /* Start with opacity 0 */
    }
    
    .animate-card-3 {
      animation: slideInFromLeft 0.8s ease-out 0.4s forwards;
      opacity: 0; /* Start with opacity 0 */
    }
  `;

 if (loading) return <LoadingState language={language} />;
 if (error) return <ErrorState language={language} error={error} />;

 return (
  <section id="skills" ref={skillsRef} className="py-30 bg-gray-800">
   <style>{animationStyles}</style>
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <SkillsHeader language={language} />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
     <SkillCard
      title={content[language].frontend}
      skills={animatedSkills.frontendSkills}
      icon="frontend"
      animationClass="animate-card-1"
     />

     <SkillCard
      title={content[language].backend}
      skills={animatedSkills.backendSkills}
      icon="backend"
      animationClass="animate-card-2"
     />

     <SkillCard
      title={content[language].electrical}
      skills={animatedSkills.electricElectronicSkills}
      icon="electrical"
      animationClass="animate-card-3"
     />
    </div>
   </div>
  </section>
 );
}