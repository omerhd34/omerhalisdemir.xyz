import { useLanguage } from '../LanguageContext/LanguageContext';
import Copyright from './Copyright';
import SocialLinks from './SocialLinks';

export default function Footer() {
 const { language } = useLanguage();

 return (
  <footer className="bg-black text-gray-400 py-8">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
     <Copyright language={language} />
     <SocialLinks language={language} />
    </div>
   </div>
  </footer>
 );
}