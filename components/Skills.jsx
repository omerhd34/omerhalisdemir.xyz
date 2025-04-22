import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaMicrochip, FaBolt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiBootstrap, SiMysql, SiAutodesk, SiProteus, SiAutocad } from 'react-icons/si';
import { useLanguage } from './LanguageContext';

export default function Skills() {
 const { language } = useLanguage();

 const content = {
  tr: {
   title: "Yetenekler",
   subtitle: "Elektrik & Elektronik Mühendisi ve Tam Yığın Geliştirici (Full Stack Developer) olarak kullandığım teknolojiler ve becerilerim",
   frontend: "Önyüz (Frontend)",
   backend: "Arkayüz (Backend)",
   electrical: "Elektrik & Elektronik",
   skills: {
    "PCB Tasarımı": "PCB Tasarımı",
    "Elektrik Tesisatı": "Elektrik Tesisatı",
    "Autocad": "Autocad",
    "Proteus": "Proteus",
    "Autodesk Eagle": "Autodesk Eagle",
    "Nesne Yönelimli Programlama": "Nesne Yönelimli Programlama",
    "HTML5": "HTML5",
    "CSS3": "CSS3",
    "JavaScript": "JavaScript",
    "React.JS": "React.JS",
    "Tailwind CSS": "Tailwind CSS",
    "Bootstrap": "Bootstrap",
    "Next.JS": "Next.JS",
    "Java": "Java",
    "MySQL": "MySQL",
    "NodeJs": "NodeJs"
   }
  },
  en: {
   title: "Skills",
   subtitle: "Technologies and skills I use as an Electrical & Electronics Engineer and Full Stack Developer",
   frontend: "Frontend",
   backend: "Backend",
   electrical: "Electrical & Electronics",
   skills: {
    "PCB Tasarımı": "PCB Design",
    "Elektrik Tesisatı": "Electrical Installation",
    "Autocad": "Autocad",
    "Proteus": "Proteus",
    "Autodesk Eagle": "Autodesk Eagle",
    "Nesne Yönelimli Programlama": "Object Oriented Programming",
    "HTML5": "HTML5",
    "CSS3": "CSS3",
    "JavaScript": "JavaScript",
    "React.JS": "React.JS",
    "Tailwind CSS": "Tailwind CSS",
    "Bootstrap": "Bootstrap",
    "Next.JS": "Next.JS",
    "Java": "Java",
    "MySQL": "MySQL",
    "NodeJs": "NodeJs"
   }
  }
 };

 const frontendSkills = [
  { name: "HTML5", percentage: 90, icon: <FaHtml5 className="text-orange-500 text-xl mr-2" /> },
  { name: "CSS3", percentage: 90, icon: <FaCss3Alt className="text-blue-500 text-xl mr-2" /> },
  { name: "JavaScript", percentage: 75, icon: <FaJs className="text-yellow-400 text-xl mr-2" /> },
  { name: "React.JS", percentage: 50, icon: <FaReact className="text-blue-400 text-xl mr-2" /> },
  { name: "Tailwind CSS", percentage: 70, icon: <SiTailwindcss className="text-cyan-400 text-xl mr-2" /> },
  { name: "Bootstrap", percentage: 70, icon: <SiBootstrap className="text-purple-500 text-xl mr-2" /> }
 ];
 const backendSkills = [
  { name: "JavaScript", percentage: 50, icon: <FaJs className="text-yellow-400 text-xl mr-2" /> },
  { name: "Next.JS", percentage: 50, icon: <SiNextdotjs className="text-white text-xl mr-2" /> },
  { name: "Java", percentage: 50, icon: <FaJava className="text-red-500 text-xl mr-2" /> },
  { name: "Nesne Yönelimli Programlama", percentage: 50, icon: <FaJava className="text-red-500 text-xl mr-2" /> },
  { name: "MySQL", percentage: 35, icon: <SiMysql className="text-blue-300 text-xl mr-2" /> },
  { name: "NodeJs", percentage: 15, icon: <FaNodeJs className="text-green-400 text-xl mr-2" /> }
 ];
 const electricElectronicSkills = [
  { name: "PCB Tasarımı", percentage: 75, icon: <FaMicrochip className="text-green-400 text-xl mr-2" /> },
  { name: "Elektrik Tesisatı", percentage: 50, icon: <FaBolt className="text-yellow-300 text-xl mr-2" /> },
  { name: "Autocad", percentage: 50, icon: <SiAutocad className="text-red-400 text-xl mr-2" /> },
  { name: "Proteus", percentage: 50, icon: <SiProteus className="text-blue-300 text-xl mr-2" /> },
  { name: "Autodesk Eagle", percentage: 50, icon: <SiAutodesk className="text-gray-300 text-xl mr-2" /> }
 ];

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

 const translateSkill = (originalName) => {
  return content[language].skills[originalName] || originalName;
 };

 return (
  <section id="skills" className="py-30 bg-gray-800">
   <style>{animationStyles}</style>
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
     <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
     <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
     <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
      {content[language].subtitle}
     </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
     {/* Frontend Skills Card with animation class */}
     <div className="bg-black rounded-xl shadow-2xl p-6 hover:shadow-blue-500/10 transition duration-300 animate-card-1">
      <div className="flex items-center mb-6">
       <div className="bg-blue-500/20 p-3 rounded-lg">
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
       </div>
       <h3 className="ml-4 text-xl font-bold">{content[language].frontend}</h3>
      </div>

      <div className="space-y-4">
       {frontendSkills.map((skill) => (
        <div key={skill.name}>
         <div className="flex justify-between mb-1 items-center">
          <div className="flex items-center">
           {skill.icon}
           <span className="text-gray-400">{translateSkill(skill.name)}</span>
          </div>
          <span className="text-blue-700 font-bold">{skill.percentage}%</span>
         </div>
         <div className="w-full bg-gray-700 rounded-full h-2">
          <div
           className="bg-blue-300 h-2 rounded-full"
           style={{ width: `${skill.percentage}%` }}
          ></div>
         </div>
        </div>
       ))}
      </div>
     </div>

     {/* Backend Skills Card with animation class */}
     <div className="bg-black rounded-xl shadow-2xl p-6 hover:shadow-blue-500/10 transition duration-300 animate-card-2">
      <div className="flex items-center mb-6">
       <div className="bg-blue-500/20 p-3 rounded-lg">
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
        </svg>
       </div>
       <h3 className="ml-4 text-xl font-bold">{content[language].backend}</h3>
      </div>

      <div className="space-y-4">
       {backendSkills.map((skill) => (
        <div key={skill.name}>
         <div className="flex justify-between mb-1 items-center">
          <div className="flex items-center">
           {skill.icon}
           <span className="text-gray-400">{translateSkill(skill.name)}</span>
          </div>
          <span className="text-blue-700 font-bold">{skill.percentage}%</span>
         </div>
         <div className="w-full bg-gray-700 rounded-full h-2">
          <div
           className="bg-blue-300 h-2 rounded-full"
           style={{ width: `${skill.percentage}%` }}
          ></div>
         </div>
        </div>
       ))}
      </div>
     </div>

     {/* Electric & Electronic Skills Card with animation class */}
     <div className="bg-black rounded-xl shadow-2xl p-6 hover:shadow-blue-500/10 transition duration-300 animate-card-3">
      <div className="flex items-center mb-6">
       <div className="bg-blue-500/20 p-3 rounded-lg">
        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
         <path d="M7 2v11h3v9l7-12h-4l4-8z"></path>
        </svg>
       </div>
       <h3 className="ml-4 text-xl font-bold">{content[language].electrical}</h3>
      </div>

      <div className="space-y-4">
       {electricElectronicSkills.map((skill) => (
        <div key={skill.name}>
         <div className="flex justify-between mb-1 items-center">
          <div className="flex items-center">
           {skill.icon}
           <span className="text-gray-400">{translateSkill(skill.name)}</span>
          </div>
          <span className="text-blue-700 font-bold">{skill.percentage}%</span>
         </div>
         <div className="w-full bg-gray-700 rounded-full h-2">
          <div
           className="bg-blue-300 h-2 rounded-full"
           style={{ width: `${skill.percentage}%` }}
          ></div>
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}