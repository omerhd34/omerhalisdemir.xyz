'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TEPAS from '../public/tepas.jpg';
import IXIRHOST from '../public/ixirhost.png';
import EUROPCODING from '../public/europcoding.png';
import CERTIFICATE from '../public/Sertifika.png';
import ACHIEVEMENT from '../public/UstunBasari.png';
import { useLanguage } from './LanguageContext';

export default function Experience() {
 const { language } = useLanguage();
 const [showModal, setShowModal] = useState(false);
 const [modalContent, setModalContent] = useState(null);
 const [modalTitle, setModalTitle] = useState('');
 const [contentType, setContentType] = useState('image');
 const [visibleItems, setVisibleItems] = useState([]);

 const content = {
  tr: {
   title: "Deneyimler",
   subtitle: "Profesyonel kariyerim boyunca edindiğim iş deneyimlerim",
   achievements: "Başarılar:",
   visitWebsite: "web sitesini ziyaret et",
   intern: "Stajyer",
   fullStackDeveloper: "Tam Yığın Geliştirici (Full Stack Developer)",
   tepasDescription: "Staj sürecimde AutoCAD programını kullanarak elektrik tesisatı tasarımı üzerine detaylı çalışmalar gerçekleştirdim. Teknik çizimleri hazırlama ve projeleri uygulama konusunda pratik deneyim kazandım.",
   tepasAchievements: [
    "Elektrik projelerinin teknik çizimlerini hazırlama",
    "Altyapı sistemleri için teknik hesaplamalar yapma",
    "Mühendislik projelerinin uygulama aşamalarını takip etme"
   ],
   ixirhostDescription: "Bu staj deneyiminde teorik bilgilerimi pratiğe dökerek web hosting ve sunucu yönetimi alanlarında kapsamlı bilgiler edindim. Ixirhost'taki deneyimlerim sayesinde yazılım geliştirmeye olan ilgim arttı ve full stack development, backend ve frontend alanlarında kendimi geliştirme kararı aldım.",
   ixirhostAchievements: [
    "Web hosting",
    "Sunucu yönetimi",
    "Yazılım geliştirme süreçlerinde aktif katılım",
    "Yazılım ilgisi arttı"
   ],
   europcodingDescription: "Bu eğitim şirketinden aldığım Tam Yığın Geliştirici eğitimi boyunca modern web teknolojileri öğrenerek çeşitli projeler geliştirdim. React, Next.js ve veritabanı yönetimi konularında pratik bilgiler edindim ve profesyonel seviyede web uygulamaları geliştirme yetkinliği kazandım.",
   europcodingAchievements: [
    "Kişisel ve profesyonel portföy web sitesi tasarımı ve geliştirilmesi",
    "Yeniden kullanılabilir React komponentleri kütüphanesi oluşturulması",
    "Responsive tasarım prensipleriyle mobil uyumlu web uygulamaları geliştirme"
   ],
   documentTitles: {
    "transcript": "Transcript",
    "certificate": "Sertifika",
    "achievement": "Üstün Başarı"
   }
  },
  en: {
   title: "Experiences",
   subtitle: "Work experiences I have gained throughout my professional career",
   achievements: "Achievements:",
   visitWebsite: "visit website",
   intern: "Intern",
   fullStackDeveloper: "Full Stack Developer",
   tepasDescription: "During my internship, I conducted detailed studies on electrical installation design using AutoCAD. I gained practical experience in preparing technical drawings and implementing projects.",
   tepasAchievements: [
    "Preparing technical drawings of electrical projects",
    "Making technical calculations for infrastructure systems",
    "Following implementation phases of engineering projects"
   ],
   ixirhostDescription: "In this internship experience, I put my theoretical knowledge into practice and gained comprehensive knowledge in web hosting and server management. Thanks to my experiences at Ixirhost, my interest in software development increased and I decided to improve myself in full stack development, backend and frontend areas.",
   ixirhostAchievements: [
    "Web hosting",
    "Server management",
    "Active participation in software development processes",
    "Increased interest in software"
   ],
   europcodingDescription: "During the Full Stack Developer training I received from this educational company, I developed various projects learning modern web technologies. I gained practical knowledge in React, Next.js and database management, and acquired the competence to develop professional level web applications.",
   europcodingAchievements: [
    "Design and development of personal and professional portfolio websites",
    "Creation of a library of reusable React components",
    "Developing mobile-compatible web applications with responsive design principles"
   ],
   documentTitles: {
    "transcript": "Transcript",
    "certificate": "Certificate",
    "achievement": "Outstanding Achievement"
   }
  }
 };

 const openImageModal = (image, title) => {
  setModalContent(image);
  setModalTitle(title);
  setContentType('image');
  setShowModal(true);
 };

 const closeModal = () => {
  setShowModal(false);
 };

 // Helper function to get translated document title
 const getDocTitle = (docId) => {
  return content[language].documentTitles[docId] || docId;
 };

 const experiences = [
  {
   id: 1,
   title: language === 'tr' ? "Stajyer" : "Intern",
   company: language === 'tr' ? "Tepaş Mühendislik İnşaat San. ve Tic. Ltd. Şti." : "TEPAŞ",
   companyLink: "http://www.tepasmuhendislik.com.tr/",
   period: "2020 (1 " + (language === 'tr' ? "ay" : "month") + ")",
   description: content[language].tepasDescription,
   achievements: content[language].tepasAchievements,
   logo: TEPAS
  },
  {
   id: 2,
   title: language === 'tr' ? "Stajyer" : "Intern",
   company: language === 'tr' ? "IXIRHOST | İksir İnternet Hizmetleri A.Ş." : "IXIRHOST",
   companyLink: "https://www.ixirhost.com/",
   period: "2021 (1 " + (language === 'tr' ? "ay" : "month") + ")",
   description: content[language].ixirhostDescription,
   achievements: content[language].ixirhostAchievements,
   logo: IXIRHOST
  },
  {
   id: 3,
   title: language === 'tr' ? "Tam Yığın Geliştirici (Full Stack Developer)" : "Full Stack Developer",
   company: "EUROPCODING SCHOOL",
   companyLink: "https://europecodingschool.com/",
   period: "2024 (6 " + (language === 'tr' ? "ay" : "months") + ")",
   description: content[language].europcodingDescription,
   achievements: content[language].europcodingAchievements,
   logo: EUROPCODING,
   documents: [
    { id: "transcript", title: getDocTitle("transcript"), type: "pdf", pdfPath: "/Transcript.pdf" },
    { id: "certificate", title: getDocTitle("certificate"), type: "image", image: CERTIFICATE },
    { id: "achievement", title: getDocTitle("achievement"), type: "image", image: ACHIEVEMENT }
   ]
  }
 ];

 useEffect(() => {
  setVisibleItems([1, 2, 3]);
 }, []);

 return (
  <section id="experience" className="py-30 bg-gray-800 overflow-hidden">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
     <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
     <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
     <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
      {content[language].subtitle}
     </p>
    </div>

    <div className="space-y-10">
     {experiences.map((exp) => (
      <div
       key={exp.id}
       className="experience-item relative sm:pl-22"
       data-id={exp.id}
      >
       <div className="absolute top-0 left-2 sm:left-[40px] h-full w-1 bg-blue-500/20 max-[720px]:hidden"></div>

       <div className="absolute left-2 sm:left-[40px] w-8 h-8 bg-gray-900 border-2 border-blue-500 rounded-full transform -translate-x-1/2 flex items-center justify-center max-[720px]:hidden">
        <span className="text-blue-500 text-xs font-bold">{exp.id}</span>
       </div>

       <div className={`bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition duration-300 relative transform ${visibleItems.includes(exp.id)
        ? 'translate-x-0 opacity-100'
        : 'translate-x-full opacity-0'
        }`}
        style={{
         transitionDelay: `${(exp.id - 1) * 200}ms`,
         transitionDuration: '700ms'
        }}>
        <div className="hidden max-[720px]:flex w-8 h-8 bg-gray-900 border-2 border-blue-500 rounded-full items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 mb-4 z-10">
         <span className="text-blue-500 text-xs font-bold">{exp.id}</span>
        </div>

        <div className="flex flex-row items-center justify-between mb-2 max-[440px]:flex-col max-[440px]:items-start">
         <h3 className="text-xl font-bold text-white">{exp.title}</h3>
         <span className="text-blue-500 text-[17px] font-medium max-[440px]:mt-1">{exp.period}</span>
        </div>
        <div className="text-gray-400 text-sm mb-4">
         <Link href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300">
          {exp.company}
         </Link>
        </div>
        <p className="text-gray-300 mb-4 text-[17px] lg:text-[20px] max-[460px]:text-[15px]">{exp.description}</p>
        <div className="space-y-2">
         <h4 className="text-md font-semibold text-blue-500">{content[language].achievements}</h4>
         <ul className="list-disc pl-5 text-gray-400 space-y-1 text-[17px] lg:text-[20px] max-[460px]:text-[15px]">
          {exp.achievements.map((achievement, i) => (
           <li key={`${exp.id}-achievement-${i}`}>{achievement}</li>
          ))}
         </ul>
        </div>

        {exp.id === 3 && exp.documents && (
         <div className="mt-6 flex flex-wrap gap-2">
          {exp.documents.map((doc) => (
           <button
            key={doc.id}
            onClick={() => {
             if (doc.type === 'image') {
              openImageModal(doc.image, doc.title);
             } else if (doc.type === 'pdf') {
              window.open(doc.pdfPath, '_blank');
             }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md text-sm font-medium transition duration-300"
           >
            {doc.title}
           </button>
          ))}
         </div>
        )}

        <div className="absolute bottom-4 right-4 md:block hidden">
         <Link
          href={exp.companyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative h-14 w-14 transition-transform duration-300 hover:scale-110"
          title={`${exp.company} ${language === 'tr' ? 'web sitesini ziyaret et' : 'visit website'}`}
         >
          <Image
           src={exp.logo}
           alt={`${exp.company} logo`}
           width={60}
           height={60}
           style={{
            objectFit: 'contain',
            objectPosition: 'center'
           }}
          />
         </Link>
        </div>
       </div>
      </div>
     ))}
    </div>

    {showModal && contentType === 'image' && (
     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-screen overflow-auto">
       <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">{modalTitle}</h3>
        <button
         onClick={closeModal}
         className="text-gray-400 hover:text-white"
        >
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
         </svg>
        </button>
       </div>
       <div className="p-4">
        <div className="relative w-full h-auto flex justify-center">
         <Image
          src={modalContent}
          alt={modalTitle}
          width={800}
          height={600}
          style={{
           maxHeight: '70vh',
           width: 'auto',
           objectFit: 'contain'
          }}
         />
        </div>
       </div>
      </div>
     </div>
    )}
   </div>
  </section>
 );
}