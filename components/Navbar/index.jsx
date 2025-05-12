'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '../../public/icon.png';
import { useLanguage } from '../LanguageContext/LanguageContext';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';
import LanguageToggle from './LanguageToggle';
import MobileMenuButton from './MobileMenuButton';
import { useScrollEffect } from './useScrollEffect';
import { navItems } from './navData';

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);
 const scrolled = useScrollEffect();
 const { language, toggleLanguage } = useLanguage();

 const toggleMenu = () => {
  setIsOpen(!isOpen);
 };

 const closeMenu = () => {
  setIsOpen(false);
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

     {/* Desktop Navigation */}
     <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
       <NavLinks
        language={language}
        navItems={navItems}
       />
       <LanguageToggle
        toggleLanguage={toggleLanguage}
        size="desktop"
       />
      </div>
     </div>

     {/* Mobile Navigation Controls */}
     <div className="flex items-center md:hidden">
      <LanguageToggle
       toggleLanguage={toggleLanguage}
       size="mobile"
      />
      <MobileMenuButton
       isOpen={isOpen}
       toggleMenu={toggleMenu}
      />
     </div>
    </div>
   </div>

   {/* Mobile Menu */}
   <MobileMenu
    isOpen={isOpen}
    language={language}
    navItems={navItems}
    closeMenu={closeMenu}
   />
  </nav>
 );
}