'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '../public/icon.png';
import { FaUser, FaLaptopCode, FaBriefcase, FaFolderOpen, FaEnvelope, FaLanguage } from 'react-icons/fa';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);
 const { language, toggleLanguage } = useLanguage();

 useEffect(() => {
  const handleScroll = () => {
   if (window.scrollY > 10) {
    setScrolled(true);
   } else {
    setScrolled(false);
   }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const navItems = {
  about: { tr: 'Hakkımda', en: 'About' },
  skills: { tr: 'Yetenekler', en: 'Skills' },
  experience: { tr: 'Deneyimler', en: 'Experiences' },
  projects: { tr: 'Projeler', en: 'Projects' },
  contact: { tr: 'İletişim', en: 'Contact' },
  language: { tr: 'English', en: 'Türkçe' }
 };

 return (
  <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 navbar-container">
    <div className={`flex items-center justify-between h-20`}>
     <div className="flex items-center">
      <Link href="/">
       <div className="cursor-pointer logo-container">
        <Image
         src={icon}
         alt="Logo"
         width={60}
         height={60}
         className="object-contain"
        />
       </div>
      </Link>
     </div>

     <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
       <Link href="#about">
        <span className="hover:text-blue-500 px-3 py-2 sm:px-[7px] rounded-md text-sm font-medium cursor-pointer inline-flex items-center">
         <FaUser className="w-4 h-4 mr-2" />
         <span>{navItems.about[language]}</span>
        </span>
       </Link>
       <Link href="#skills">
        <span className="hover:text-blue-500 px-3 py-2 sm:px-[7px] rounded-md text-sm font-medium cursor-pointer inline-flex items-center">
         <FaLaptopCode className="w-4 h-4 mr-2" />
         <span>{navItems.skills[language]}</span>
        </span>
       </Link>
       <Link href="#experience">
        <span className="hover:text-blue-500 px-3 py-2 sm:px-[7px] rounded-md text-sm font-medium cursor-pointer inline-flex items-center">
         <FaBriefcase className="w-4 h-4 mr-2" />
         <span>{navItems.experience[language]}</span>
        </span>
       </Link>
       <Link href="#projects">
        <span className="hover:text-blue-500 px-3 py-2 sm:px-[7px] rounded-md text-sm font-medium cursor-pointer inline-flex items-center">
         <FaFolderOpen className="w-4 h-4 mr-2" />
         <span>{navItems.projects[language]}</span>
        </span>
       </Link>
       <Link href="#contact">
        <span className="hover:text-blue-500 px-3 py-2 sm:px-[7px] rounded-md text-sm font-medium cursor-pointer inline-flex items-center">
         <FaEnvelope className="w-4 h-4 mr-2" />
         <span>{navItems.contact[language]}</span>
        </span>
       </Link>
       <button
        onClick={toggleLanguage}
        className="hover:bg-blue-700 text-white p-0 rounded-full text-sm font-medium cursor-pointer inline-flex items-center justify-center transition-all duration-300 shadow-md w-8 h-8"
       >
        <FaLanguage className="w-5 h-5" />
       </button>
      </div>
     </div>

     <div className="flex items-center md:hidden">
      <button
       onClick={toggleLanguage}
       className="mr-2 hover:bg-gray-700 text-white rounded-md text-sm font-medium cursor-pointer inline-flex items-center justify-center transition-all duration-500 shadow-md w-10 h-10"
      >
       <FaLanguage className="w-5 h-5" />
      </button>

      {/* Menu toggle button */}
      <button
       onClick={() => setIsOpen(!isOpen)}
       className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
      >
       <svg
        className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
       >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
       </svg>
       <svg
        className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
       >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
       </svg>
      </button>
     </div>
    </div>
   </div>

   {/* Mobile menu */}
   <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
    <div className="px-1 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
     <Link href="#about">
      <span
       className="text-white hover:bg-gray-800 flex items-center w-full py-2 px-4 rounded-md text-base font-medium cursor-pointer"
       onClick={() => setIsOpen(false)}
      >
       <div className="flex-grow text-right pr-2">{navItems.about[language]}</div>
       <div className="w-8 flex justify-center"><FaUser className="w-4 h-4" /></div>
      </span>
     </Link>
     <Link href="#skills">
      <span
       className="text-white hover:bg-gray-800 flex items-center w-full py-2 px-4 rounded-md text-base font-medium cursor-pointer"
       onClick={() => setIsOpen(false)}
      >
       <div className="flex-grow text-right pr-2">{navItems.skills[language]}</div>
       <div className="w-8 flex justify-center"><FaLaptopCode className="w-4 h-4" /></div>
      </span>
     </Link>
     <Link href="#experience">
      <span
       className="text-white hover:bg-gray-800 flex items-center w-full py-2 px-4 rounded-md text-base font-medium cursor-pointer"
       onClick={() => setIsOpen(false)}
      >
       <div className="flex-grow text-right pr-2">{navItems.experience[language]}</div>
       <div className="w-8 flex justify-center"><FaBriefcase className="w-4 h-4" /></div>
      </span>
     </Link>
     <Link href="#projects">
      <span
       className="text-white hover:bg-gray-800 flex items-center w-full py-2 px-4 rounded-md text-base font-medium cursor-pointer"
       onClick={() => setIsOpen(false)}
      >
       <div className="flex-grow text-right pr-2">{navItems.projects[language]}</div>
       <div className="w-8 flex justify-center"><FaFolderOpen className="w-4 h-4" /></div>
      </span>
     </Link>
     <Link href="#contact">
      <span
       className="text-white hover:bg-gray-800 flex items-center w-full py-2 px-4 rounded-md text-base font-medium cursor-pointer"
       onClick={() => setIsOpen(false)}
      >
       <div className="flex-grow text-right pr-2">{navItems.contact[language]}</div>
       <div className="w-8 flex justify-center"><FaEnvelope className="w-4 h-4" /></div>
      </span>
     </Link>
    </div>
   </div>
  </nav>
 );
}