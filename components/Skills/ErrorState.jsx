import { content } from './localization';

export default function ErrorState({ language, error }) {
 return (
  <section id="skills" className="py-30 bg-gray-800">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
    <p className="text-red-400">{content[language].error}{error}</p>
    <p className="text-white mt-2">{content[language].dbErrorMessage}</p>
   </div>
  </section>
 );
}