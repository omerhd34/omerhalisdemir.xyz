import Link from 'next/link';
import Image from 'next/image';
import ICU from '../../public/icu.png';
import { content } from './localization';

export default function UniversityCard({ language, isVisible }) {
 return (
  <div
   className={`bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-gray-600 transition duration-300 group relative col-span-2 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
   style={{
    transitionDelay: '300ms',
    transitionDuration: '500ms',
    transitionProperty: 'transform, opacity'
   }}
  >
   <Link href={language === 'tr' ? "https://ticaret.edu.tr/" : "https://ticaret.edu.tr/en/"} target="_blank" rel="noopener noreferrer" className="w-full">
    <div className="relative w-full">
     <div className="absolute top-3 right-0">
      <Image src={ICU} alt="İTİCÜ" width={30} height={30} />
     </div>
    </div>
    <div className="text-xl md:text-3xl font-bold text-blue-500 mb-2">
     {language === 'tr' ? 'İTİCÜ - EEM' : 'ICU - EEE'}
    </div>
    <div className="text-gray-300 text-sm">{content[language].university}</div>
    <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-800 text-white p-2 rounded shadow-lg bottom-full mb-2 z-10 w-60 text-center whitespace-pre-line">
     {content[language].universityTooltip}
    </div>
   </Link>
  </div>
 );
}