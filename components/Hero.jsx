import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img1 from '../public/imgg.jpg';
import { useLanguage } from './LanguageContext';

export default function Hero() {
 const { language } = useLanguage();

 const [typedText, setTypedText] = useState('');
 const titlesDict = {
  tr: ['Tam Yığın Geliştirici', 'Elektrik Elektronik Mühendisi'],
  en: ['Full Stack Developer', 'Electrical & Electronics Engineer']
 };
 const [titleIndex, setTitleIndex] = useState(0);
 const [charIndex, setCharIndex] = useState(0);
 const [isDeleting, setIsDeleting] = useState(false);
 const [showLinks, setShowLinks] = useState(false); // Yeni state

 const content = {
  tr: {
   greeting: "Merhaba, ben",
   description: "Modern ve kullanıcı dostu web siteleri geliştiren tutkulu bir Tam Yığın Geliştiriciyim. (Full Stack Developer).",
   contactButton: "İletişime Geç",
   projectsButton: "Projelerim",
   cvPath: "/cv.pdf",
   linksButton: "Github & LinkedIn & CV"
  },
  en: {
   greeting: "Hello, I'm",
   description: "I'm a passionate Full Stack Developer creating modern and user-friendly websites.",
   contactButton: "Contact Me",
   projectsButton: "My Projects",
   cvPath: "/cv-english.pdf",
   linksButton: "Github & LinkedIn & CV"
  }
 };

 useEffect(() => {
  setTypedText('');
  setCharIndex(0);
  setTitleIndex(0);
  setIsDeleting(false);
 }, [language]);

 useEffect(() => {
  const titles = titlesDict[language] || titlesDict.tr;
  const currentTitle = titles[titleIndex];

  const type = () => {
   if (isDeleting) {
    setTypedText(currentTitle.substring(0, charIndex - 1));
    setCharIndex(charIndex - 1);
   } else {
    setTypedText(currentTitle.substring(0, charIndex + 1));
    setCharIndex(charIndex + 1);
   }

   if (!isDeleting && charIndex === currentTitle.length) {
    setTimeout(() => setIsDeleting(true), 1500);
   } else if (isDeleting && charIndex === 0) {
    setIsDeleting(false);
    setTitleIndex((titleIndex + 1) % titles.length);
   }
  };

  const timer = setTimeout(type, isDeleting ? 100 : 200);
  return () => clearTimeout(timer);
 }, [charIndex, isDeleting, titleIndex, language]);

 const handleMouseEnter = () => {
  setTimeout(() => setShowLinks(true), 2000); // 2 saniye gecikme
 };

 const handleMouseLeave = () => {
  setShowLinks(false);
 };

 return (
  <section id="home" className="flex items-center justify-center min-h-screen pt-16 px-3">
   <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 text-center w-full">
    <div className="grid md:grid-cols-2 gap-5 items-center">
     <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <h2 className="text-[25px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold">
       {content[language].greeting}
      </h2>
      <h1 className="text-[27px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold text-blue-500 mb-2">Ömer Halis DEMİR</h1>
      <div className="min-h-10 mb-1">
       <h3 className="text-xl xs:text-2xl sm:text-3xl font-medium">
        <span className="text-blue-500 text-[20px] sm:text-[27px] md:text-[33px] lg:text-[37px]">{typedText}</span>
        <span className="animate-blink">|</span>
       </h3>
      </div>
      <p className="mt-2 text-gray-300 max-w-md text-sm xs:text-base">
       {content[language].description}
      </p>
      <div className="mt-6 xs:mt-8 flex flex-wrap gap-3 xs:gap-4 justify-center md:justify-start">
       <Link href="#contact">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition duration-700 transform hover:scale-105 cursor-pointer text-sm xs:text-base">
         {content[language].contactButton}
        </button>
       </Link>
       <Link href="#projects">
        <button className="bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white border border-blue-500 hover:border-transparent font-bold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition duration-700 transform hover:scale-105 cursor-pointer text-sm xs:text-base">
         {content[language].projectsButton}
        </button>
       </Link>
       <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="group min-w-[200px] xs:min-w-[220px] bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white border border-blue-500 hover:border-transparent font-bold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition duration-700 transform hover:scale-105 text-sm xs:text-base flex items-center justify-center">
         <span className="block group-hover:hidden transition-opacity duration-700 text-center">{content[language].linksButton}</span>
         <div className={`hidden group-hover:flex space-x-4 items-center justify-center transition-all duration-700 ${showLinks ? 'flex' : 'hidden'}`}>
          <a href="https://github.com/omerhd34" target="_blank" rel="noopener noreferrer" className="text-white transition-transform duration-700">
           <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
           </svg>
          </a>
          <a href="https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/" target="_blank" rel="noopener noreferrer" className="text-white transition-transform duration-700">
           <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
           </svg>
          </a>
          <a
           href={content[language].cvPath} target="_blank" rel="noopener noreferrer"
           className="bg-white text-blue-700 font-bold py-[2px] px-[4px] xs:py-1 xs:px-3 rounded-md transition-transform duration-300 flex items-center justify-center">
           <span className="text-xs xs:text-sm font-bold">CV</span>
          </a>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div className="flex justify-center mt-0">
      <div className="relative w-48 h-48 xs:w-64 xs:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
       <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
       <div className="absolute inset-3 xs:inset-4 rounded-full bg-blue-500 opacity-20 animate-pulse delay-300"></div>
       <div className="absolute inset-6 xs:inset-8 rounded-full bg-gray-800 border-2 xs:border-4 border-blue-500 shadow-2xl overflow-hidden">
        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-3xl font-bold text-blue-500">
         <Image
          src={img1}
          alt="Ömer Halis DEMİR"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          priority
         />
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
