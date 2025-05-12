import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { content } from './localization';

export default function SocialLinks({ language, isVisible }) {
 return (
  <div
   className={`bg-gray-700 p-2 sm:p-6 rounded-lg shadow-md flex flex-col items-center justify-center hover:bg-gray-600 transition duration-300 group relative transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
   style={{
    transitionDelay: '500ms',
    transitionDuration: '500ms',
    transitionProperty: 'transform, opacity'
   }}
  >
   <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4">
    <Link
     href="https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/"
     target="_blank"
     rel="noopener noreferrer"
     className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-[#0077b5] text-[#0077b5] hover:text-white hover:bg-[#0077b5] transition duration-500"
    >
     <FaLinkedin className="text-sm sm:text-base md:text-lg" />
    </Link>
    <Link
     href="https://github.com/omerhd34"
     target="_blank"
     rel="noopener noreferrer"
     className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-[#ff0000] text-[#ff0000] hover:text-white hover:bg-[#ff0000] transition duration-500"
    >
     <FaGithub className="text-sm sm:text-base md:text-lg" />
    </Link>
    <Link
     href={content[language].cvPath}
     target="_blank"
     rel="noopener noreferrer"
     className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-300 hover:text-white hover:bg-black transition duration-500 font-bold text-xs sm:text-sm max-[300px]:mt-1"
    >
     CV
    </Link>
   </div>
  </div>
 );
}