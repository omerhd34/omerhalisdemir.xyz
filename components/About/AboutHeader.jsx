import { content } from './localization';

export default function AboutHeader({ language }) {
 return (
  <div className="text-center mb-12">
   <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
   <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
  </div>
 );
}