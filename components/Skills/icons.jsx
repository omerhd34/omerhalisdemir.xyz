import {
 FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
 FaJava, FaMicrochip, FaBolt
} from 'react-icons/fa';
import {
 SiNextdotjs, SiTailwindcss, SiBootstrap, SiMysql,
 SiAutodesk, SiProteus, SiAutocad
} from 'react-icons/si';

export function getIconComponent(iconName) {
 const iconComponents = {
  FaHtml5: <FaHtml5 className="text-orange-500 text-xl mr-2" />,
  FaCss3Alt: <FaCss3Alt className="text-blue-500 text-xl mr-2" />,
  FaJs: <FaJs className="text-yellow-400 text-xl mr-2" />,
  FaReact: <FaReact className="text-blue-400 text-xl mr-2" />,
  SiTailwindcss: <SiTailwindcss className="text-cyan-400 text-xl mr-2" />,
  SiBootstrap: <SiBootstrap className="text-purple-500 text-xl mr-2" />,
  SiNextdotjs: <SiNextdotjs className="text-white text-xl mr-2" />,
  FaJava: <FaJava className="text-red-500 text-xl mr-2" />,
  SiMysql: <SiMysql className="text-blue-300 text-xl mr-2" />,
  FaNodeJs: <FaNodeJs className="text-green-400 text-xl mr-2" />,
  FaMicrochip: <FaMicrochip className="text-green-400 text-xl mr-2" />,
  FaBolt: <FaBolt className="text-yellow-300 text-xl mr-2" />,
  SiAutocad: <SiAutocad className="text-red-400 text-xl mr-2" />,
  SiProteus: <SiProteus className="text-blue-300 text-xl mr-2" />,
  SiAutodesk: <SiAutodesk className="text-gray-300 text-xl mr-2" />
 };
 return iconComponents[iconName] || null;
}

export function getCardIcon(type) {
 switch (type) {
  case 'frontend':
   return (
    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
   );
  case 'backend':
   return (
    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
    </svg>
   );
  case 'electrical':
   return (
    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <path d="M7 2v11h3v9l7-12h-4l4-8z"></path>
    </svg>
   );
  default:
   return null;
 }
}