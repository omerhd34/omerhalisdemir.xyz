import { content } from './localization';

export default function ContactHeader({ language }) {
 return (
  <div className="text-center mb-10">
   <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
   <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
   <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-[16px] sm:text-[18px]">
    {content[language].subtitle}
   </p>
  </div>
 );
}