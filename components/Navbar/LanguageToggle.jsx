import { FaLanguage } from 'react-icons/fa';

export default function LanguageToggle({ toggleLanguage, size }) {
 if (size === 'mobile') {
  return (
   <button
    onClick={toggleLanguage}
    className="mr-2 bg-gray-950 hover:bg-gray-700 text-gray-400 rounded-2xl text-sm font-medium cursor-pointer inline-flex items-center justify-center transition-all duration-500 shadow-md w-10 h-10"
    aria-label="Change Language"
   >
    <FaLanguage className="w-5 h-5" />
   </button>
  );
 }

 return (
  <button
   onClick={toggleLanguage}
   className="hover:bg-blue-700 bg-gray-950 text-white p-0 rounded-full text-sm font-medium cursor-pointer inline-flex items-center justify-center transition-all duration-300 shadow-md w-8 h-8"
   aria-label="Change Language"
  >
   <FaLanguage className="w-4.5 h-4.5" />
  </button>
 );
}