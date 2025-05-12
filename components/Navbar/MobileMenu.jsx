import Link from 'next/link';
import { FaUser, FaLaptopCode, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

export default function MobileMenu({ isOpen, language, navItems, closeMenu }) {
 const icons = {
  about: <FaUser className="w-4 h-4" />,
  skills: <FaLaptopCode className="w-4 h-4" />,
  experience: <FaBriefcase className="w-4 h-4" />,
  projects: <FaFolderOpen className="w-4 h-4" />,
  contact: <FaEnvelope className="w-4 h-4" />
 };

 return (
  <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
   <div className="px-1 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-950">
    {Object.keys(navItems).filter(key => key !== 'language').map(key => (
     <Link href={`#${key}`} key={key}>
      <span
       className="text-white hover:bg-gray-800 flex items-center w-full py-2 px-4 rounded-md text-base font-medium cursor-pointer"
       onClick={closeMenu}
      >
       <div className="flex-grow text-right pr-2">{navItems[key][language]}</div>
       <div className="w-8 flex justify-center">{icons[key]}</div>
      </span>
     </Link>
    ))}
   </div>
  </div>
 );
}