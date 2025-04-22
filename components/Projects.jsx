'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

import arduino1 from '../public/arduino1.jpg';
import arduino2 from '../public/arduino2.jpg';
import arduino3 from '../public/arduino3.jpg';
import metalDedector from '../public/MetalDedector.png';
import chiptest from '../public/chiptest.jpg';
import fsd from '../public/fsd.jpeg';

export default function Projects() {
 const { language } = useLanguage();
 const [filter, setFilter] = useState('all');
 const [showGallery, setShowGallery] = useState(false);
 const [galleryImages, setGalleryImages] = useState([]);
 const [activeImageIndex, setActiveImageIndex] = useState(0);
 const [visibleProjects, setVisibleProjects] = useState([]);

 const content = {
  tr: {
   title: "Projeler",
   subtitle: "Önyüz Geliştirici ve Elektrik Elektronik Mühendisliği alanlarında geliştirdiğim projeler",
   filterAll: "Tümü",
   filterElectronics: "Elektrik & Elektronik",
   filterFrontend: "Önyüz Geliştirici(Frontend Developer)",
   technologies: "Kullanılan Teknolojiler:",
   view: "Görüntüle",
   imageCounter: "Resim",
   projects: [
    {
     id: 1,
     title: "METAL DEDEKTÖR",
     description: "Bu projede, metal nesneleri algılayabilen taşınabilir bir metal dedektör tasarladım ve geliştirdim.",
    },
    {
     id: 2,
     title: "ARDUINO UNO BELLEK GÜÇLENDİRME",
     description: "Arduino Uno mikrodenetleyicisinin bellek kapasitesini genişleterek daha karmaşık projelerde kullanılabilmesini sağlayan bir donanım geliştirme projesi.",
    },
    {
     id: 3,
     title: "Kişisel Portföy Web Sitesi",
     description: "React ve Next.js kullanarak geliştirdiğim, tüm projelerimi ve deneyimlerimi sergilediğim kişisel portföy web sitesi.",
    }
   ]
  },
  en: {
   title: "Projects",
   subtitle: "Projects I developed in Frontend Development and Electrical & Electronics Engineering fields",
   filterAll: "All",
   filterElectronics: "Electrical & Electronics",
   filterFrontend: "Frontend Developer",
   technologies: "Technologies Used:",
   view: "View",
   imageCounter: "Image",
   projects: [
    {
     id: 1,
     title: "METAL DETECTOR",
     description: "In this project, I designed and developed a portable metal detector capable of detecting metal objects.",
    },
    {
     id: 2,
     title: "ARDUINO UNO MEMORY ENHANCEMENT",
     description: "A hardware development project that expands the memory capacity of the Arduino Uno microcontroller, enabling it to be used in more complex projects.",
    },
    {
     id: 3,
     title: "Personal Portfolio Website",
     description: "A personal portfolio website that I developed using React and Next.js, showcasing all my projects and experiences.",
    }
   ]
  }
 };

 const getProjectInfo = (projectId, field) => {
  const projectInfo = content[language].projects.find(p => p.id === projectId);
  return projectInfo ? projectInfo[field] : '';
 };

 const projects = [
  {
   id: 1,
   title: language === 'tr' ? "METAL DEDEKTÖR" : "METAL DETECTOR",
   category: "electric_electronics",
   image: metalDedector,
   images: [metalDedector],
   description: getProjectInfo(1, 'description'),
   technologies: ["Proteus", "Autodesk Eagle"],
  },
  {
   id: 2,
   title: language === 'tr' ? "ARDUINO UNO BELLEK GÜÇLENDİRME" : "ARDUINO UNO MEMORY ENHANCEMENT",
   category: "electric_electronics",
   image: chiptest,
   images: [arduino1, arduino2, arduino3],
   description: getProjectInfo(2, 'description'),
   technologies: ["Arduino IDE", "Autodesk Eagle"],
  },
  {
   id: 3,
   title: language === 'tr' ? "Kişisel Portföy Web Sitesi" : "Personal Portfolio Website",
   category: "frontend",
   image: fsd,
   images: [],
   description: getProjectInfo(3, 'description'),
   technologies: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
   demoLink: "https://omerhalisdemir.xyz",
   githubLink: "https://github.com/omerhd34/omerhalisdemir.xyz"
  }
 ];

 useEffect(() => {
  const projectIds = projects.map(project => project.id);
  setVisibleProjects(projectIds);
 }, []);

 useEffect(() => {
  setVisibleProjects([]);

  setTimeout(() => {
   const filteredIds = filteredProjects.map(project => project.id);
   setVisibleProjects(filteredIds);
  }, 100);
 }, [filter, language]);

 const filteredProjects = filter === 'all'
  ? projects
  : projects.filter(project => project.category === filter);

 const openGallery = (images, index = 0) => {
  setGalleryImages(images.map(img => typeof img === 'string' ? img : img.src));
  setActiveImageIndex(index);
  setShowGallery(true);
  document.body.style.overflow = 'hidden';
 };

 const closeGallery = () => {
  setShowGallery(false);
  document.body.style.overflow = 'auto';
 };

 const nextImage = () => {
  setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
 };

 const prevImage = () => {
  setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
 };

 return (
  <section id="projects" className="py-30 bg-gray-800 overflow-hidden">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
     <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
     <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
     <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
      {content[language].subtitle}
     </p>
    </div>

    <div className="flex flex-wrap justify-center mb-12 gap-4">
     {['all', 'electric_electronics', 'frontend'].map((type) => (
      <button
       key={type}
       onClick={() => setFilter(type)}
       className={`px-4 py-2 rounded-md text-[16px] sm:text-[18px] font-medium transition ${filter === type ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
      >
       {type === 'all'
        ? content[language].filterAll
        : type === 'electric_electronics'
         ? content[language].filterElectronics
         : content[language].filterFrontend}
      </button>
     ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {filteredProjects.map((project) => (
      <div
       key={project.id}
       className={`bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition duration-700 transform hover:-translate-y-2 flex flex-col h-full ${visibleProjects.includes(project.id)
        ? 'translate-x-0 opacity-100'
        : '-translate-x-full opacity-0'
        }`}
       style={{
        transitionDelay: `${(project.id - 1) * 200}ms`
       }}
      >
       <div className="h-48 bg-gray-700 relative flex items-center justify-center overflow-hidden">
        <Image
         src={project.image}
         alt={project.title}
         className="w-full h-full object-cover"
         width={400}
         height={200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-4 w-full">
         <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
         <div className="inline-block px-2 py-1 bg-blue-600 rounded-md text-xs font-medium text-white">
          {project.category === 'electric_electronics'
           ? content[language].filterElectronics.split('(')[0].trim()
           : content[language].filterFrontend.split('(')[0].trim()}
         </div>
        </div>
       </div>

       <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
         {project.description}
        </p>

        <div className="mb-6">
         <h4 className="text-sm font-semibold text-blue-500 mb-2">{content[language].technologies}</h4>
         <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
           <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
            {tech}
           </span>
          ))}
         </div>
        </div>

        <div className="flex justify-between border-t border-gray-800 pt-4 mt-auto">
         {project.category === 'electric_electronics' && project.images.length > 0 && (
          <button
           onClick={() => openGallery(project.images)}
           className="text-blue-500 hover:text-blue-400 font-medium flex items-center transition"
          >
           <span>{content[language].view}</span>
          </button>
         )}

         {project.category !== 'electric_electronics' && project.demoLink && (
          <Link
           href={project.demoLink}
           target="_blank"
           rel="noopener noreferrer"
           className="text-blue-500 hover:text-blue-400 font-medium flex items-center transition"
          >
           <span>{content[language].view}</span>
          </Link>
         )}

         {project.githubLink && (
          <Link
           href={project.githubLink}
           target="_blank"
           rel="noopener noreferrer"
           className="text-gray-400 hover:text-white transition flex items-center"
          >
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
             fillRule="evenodd"
             d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
             clipRule="evenodd"
            />
           </svg>
          </Link>
         )}
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>

   {showGallery && (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center p-4">
     <button
      onClick={closeGallery}
      className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
     >
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
     </button>

     <div className="relative w-full max-w-4xl h-[60vh] flex items-center justify-center">
      <Image
       src={galleryImages[activeImageIndex]}
       alt={`${content[language].imageCounter} ${activeImageIndex + 1}`}
       className="max-h-full max-w-full object-contain"
       width={800}
       height={600}
      />

      {galleryImages.length > 1 && (
       <>
        <button onClick={prevImage} className="absolute left-2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
         </svg>
        </button>
        <button onClick={nextImage} className="absolute right-2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
         </svg>
        </button>
       </>
      )}
     </div>

     <div className="flex mt-4 space-x-2 overflow-x-auto max-w-full p-2">
      {galleryImages.map((img, index) => (
       <button
        key={index}
        onClick={() => setActiveImageIndex(index)}
        className={`flex-shrink-0 w-20 h-20 border-2 ${index === activeImageIndex ? 'border-blue-500' : 'border-transparent'}`}
       >
        <Image
         src={img}
         alt={`${content[language].imageCounter} ${index + 1}`}
         className="w-full h-full object-cover"
         width={80}
         height={80}
        />
       </button>
      ))}
     </div>

     <div className="text-white mt-4">
      {activeImageIndex + 1} / {galleryImages.length}
     </div>
    </div>
   )}
  </section>
 );
}