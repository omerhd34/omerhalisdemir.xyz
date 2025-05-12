import Link from 'next/link';
import { FaUser, FaLaptopCode, FaBriefcase, FaFolderOpen, FaEnvelope } from 'react-icons/fa';

export default function NavLinks({ language, navItems }) {
 const icons = {
  about: <FaUser className="w-4 h-4 mr-2" />,
  skills: <FaLaptopCode className="w-4 h-4 mr-2" />,
  experience: <FaBriefcase className="w-4 h-4 mr-2" />,
  projects: <FaFolderOpen className="w-4 h-4 mr-2" />,
  contact: <FaEnvelope className="w-4 h-4 mr-2" />
 };

 return (
  <>
   {Object.keys(navItems).filter(key => key !== 'language').map(key => (
    <Link href={`#${key}`} key={key}>
     <span className="hover:text-blue-500 px-3 py-2 sm:px-[7px] rounded-md text-sm font-medium cursor-pointer inline-flex items-center">
      {icons[key]}
      <span>{navItems[key][language]}</span>
     </span>
    </Link>
   ))}
  </>
 );
}