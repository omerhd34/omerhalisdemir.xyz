import { content } from './localization.js';

export default function Copyright({ language }) {
 return (
  <div className="mb-4 md:mb-0">
   <p className="text-center md:text-left">
    {content[language].copyright}
   </p>
  </div>
 );
}