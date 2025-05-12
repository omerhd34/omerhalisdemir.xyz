import Link from 'next/link';
import TypedText from './TypedText';
import SocialButtons from './SocialButtons';
import { content } from './localization';

export default function HeroContent({
 language,
 typedText,
 handleMouseEnter,
 handleMouseLeave,
 showLinks
}) {
 return (
  <div className="flex flex-col items-center md:items-start text-center md:text-left">
   <h2 className="text-[25px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold">
    {content[language].greeting}
   </h2>

   <h1 className="text-[27px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-bold text-blue-500 mb-2">
    Ömer Halis DEMİR
   </h1>

   <TypedText typedText={typedText} />

   <p className="mt-2 text-gray-300 max-w-md text-sm xs:text-base">
    {content[language].description}
   </p>

   <div className="mt-6 xs:mt-8 flex flex-wrap gap-3 xs:gap-4 justify-center md:justify-start">
    <Link href="#contact">
     <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition duration-700 transform hover:scale-105 cursor-pointer text-sm xs:text-base">
      {content[language].contactButton}
     </button>
    </Link>

    <Link href="#projects">
     <button className="bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white border border-blue-500 hover:border-transparent font-bold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition duration-700 transform hover:scale-105 cursor-pointer text-sm xs:text-base">
      {content[language].projectsButton}
     </button>
    </Link>

    <SocialButtons
     language={language}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     showLinks={showLinks}
    />
   </div>
  </div>
 );
}