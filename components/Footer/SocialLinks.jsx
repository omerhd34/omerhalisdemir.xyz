import Link from 'next/link';
import { content } from './localization';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import CvIcon from './icons/CvIcon';

export default function SocialLinks({ language }) {
 return (
  <div className="flex space-x-4">
   <Link
    href="https://github.com/omerhd34"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white"
    aria-label="GitHub"
   >
    <GithubIcon />
   </Link>

   <Link
    href="https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white"
    aria-label="LinkedIn"
   >
    <LinkedinIcon />
   </Link>

   <Link
    href={content[language].cvPath}
    target="_blank"
    className="text-gray-400 hover:text-white duration-300"
    aria-label="CV"
   >
    <CvIcon />
   </Link>
  </div>
 );
}