import SkillBar from './SkillBar';
import { getCardIcon } from './icons';

export default function SkillCard({ title, skills, icon, animationClass }) {
 return (
  <div className={`bg-black rounded-xl shadow-2xl p-6 hover:shadow-blue-500/10 transition duration-300 ${animationClass}`}>
   <div className="flex items-center mb-6">
    <div className="bg-blue-500/20 p-3 rounded-lg">
     {getCardIcon(icon)}
    </div>
    <h3 className="ml-4 text-xl font-bold text-white">{title}</h3>
   </div>

   <div className="space-y-4">
    {skills.map((skill, index) => (
     <SkillBar
      key={`${icon}-${index}`}
      skill={skill}
     />
    ))}
   </div>
  </div>
 );
}