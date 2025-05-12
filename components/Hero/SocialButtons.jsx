import { content } from './localization';
import SocialIcons from './SocialIcons';

export default function SocialButtons({ language, onMouseEnter, onMouseLeave, showLinks }) {
 return (
  <div className="relative inline-block" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
   <div className="group min-w-[200px] xs:min-w-[220px] bg-transparent hover:bg-blue-700 text-blue-500 hover:text-white border border-blue-500 hover:border-transparent font-bold py-2 xs:py-3 px-4 xs:px-6 rounded-lg transition duration-700 transform hover:scale-105 text-sm xs:text-base flex items-center justify-center">
    <span className="block group-hover:hidden transition-opacity duration-700 text-center">
     {content[language].linksButton}
    </span>

    <div className={`hidden group-hover:flex space-x-4 items-center justify-center transition-all duration-700 ${showLinks ? 'flex' : 'hidden'}`}>
     <SocialIcons language={language} />
    </div>
   </div>
  </div>
 );
}