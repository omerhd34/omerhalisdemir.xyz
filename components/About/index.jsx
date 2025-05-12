import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../LanguageContext/LanguageContext';
import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';
import InfoCards from './InfoCards';

export default function About() {
 const { language } = useLanguage();
 const [isVisible, setIsVisible] = useState(false);
 const sectionRef = useRef(null);

 useEffect(() => {
  setIsVisible(false);
  const timer = setTimeout(() => {
   const observer = new IntersectionObserver(
    ([entry]) => {
     if (entry.isIntersecting) {
      setIsVisible(true);
      observer.disconnect();
     }
    },
    { threshold: 0.75 }
   );

   if (sectionRef.current) {
    observer.observe(sectionRef.current);
   }

   return () => {
    if (sectionRef.current) {
     observer.disconnect();
    }
   };
  }, 1000);

  return () => {
   clearTimeout(timer);
  };
 }, [language]);

 return (
  <section id="about" className="pt-30 pb-20 bg-gray-800" ref={sectionRef}>
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <AboutHeader language={language} />

    <div className="grid md:grid-cols-2 gap-10 items-center">
     <AboutContent language={language} />
     <InfoCards language={language} isVisible={isVisible} />
    </div>
   </div>
  </section>
 );
}