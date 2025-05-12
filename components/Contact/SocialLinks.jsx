import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { content } from './localization';

export default function SocialLinks({ language }) {
 return (
  <div className="flex items-center justify-start max-[864px]:justify-center gap-3 sm:gap-5 mt-1">
   <Link
    href="https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-[#0077b5] text-[#0077b5] hover:text-white hover:bg-[#0077b5] transition duration-500 ease-in-out"
   >
    <FaLinkedinIn size={20} />
   </Link>

   <Link
    href="https://github.com/omerhd34"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-[#ff0000] text-[#ff0000] hover:text-white hover:bg-[#ff0000] transition duration-500 ease-in-out"
   >
    <FaGithub size={20} />
   </Link>

   <Link
    href={content[language].cvPath}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-300 hover:text-white hover:bg-black transition duration-500 ease-in-out font-bold text-sm"
   >
    CV
   </Link>
  </div>
 );
}