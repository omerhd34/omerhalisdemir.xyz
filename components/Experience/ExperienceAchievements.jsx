import { content } from './localization';

export default function ExperienceAchievements({ achievements, experienceId, language }) {
 return (
  <div className="space-y-2">
   <h4 className="text-md font-semibold text-blue-500">
    {content[language].achievements}
   </h4>
   <ul className="list-disc pl-5 text-gray-400 space-y-1 text-[17px] lg:text-[20px] max-[460px]:text-[15px]">
    {achievements.map((achievement, i) => (
     <li key={`${experienceId}-achievement-${i}`}>{achievement}</li>
    ))}
   </ul>
  </div>
 );
}