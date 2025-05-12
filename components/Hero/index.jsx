import { useState } from 'react';
import { useLanguage } from '../LanguageContext/LanguageContext';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';
import { useTypingEffect } from './useTypingEffect';

export default function Hero() {
 const { language } = useLanguage();
 const typedText = useTypingEffect(language);
 const [showLinks, setShowLinks] = useState(false);
 const [isImageHovered, setIsImageHovered] = useState(false);

 // Mouse event handlers
 const handleMouseEnter = () => {
  setTimeout(() => setShowLinks(true), 2000); // 2 second delay
 };

 const handleMouseLeave = () => {
  setShowLinks(false);
 };

 // Image hover handlers
 const handleImageEnter = () => {
  setIsImageHovered(true);
 };

 const handleImageLeave = () => {
  setIsImageHovered(false);
 };

 return (
  <section id="home" className="flex items-center justify-center min-h-screen pt-16 px-3">
   <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 text-center w-full">
    <div className="grid md:grid-cols-2 gap-5 items-center">
     <HeroContent
      language={language}
      typedText={typedText}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      showLinks={showLinks}
     />

     <HeroImage
      isHovered={isImageHovered}
      onMouseEnter={handleImageEnter}
      onMouseLeave={handleImageLeave}
     />
    </div>
   </div>
  </section>
 );
}