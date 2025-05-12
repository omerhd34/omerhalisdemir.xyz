import { content } from './localization';

export default function AboutContent({ language }) {
 return (
  <div className="space-y-6">
   <p className="text-gray-300">
    {content[language].greeting} <span className="text-blue-500 font-semibold">{content[language].name}</span>.
    {' '}{content[language].education}
   </p>
   <p className="text-gray-300">
    {content[language].paragraph1}
   </p>
   <p className="text-gray-300">
    {content[language].paragraph2}
   </p>
  </div>
 );
}