import { getIconComponent } from './icons';

export default function SkillBar({ skill }) {
 return (
  <div>
   <div className="flex justify-between mb-1 items-center">
    <div className="flex items-center">
     {getIconComponent(skill.icon)}
     <span className="text-gray-400">{skill.name}</span>
    </div>
    <span className="text-blue-400 font-bold">{skill.percentage}%</span>
   </div>
   <div className="w-full bg-gray-700 rounded-full h-2">
    <div
     className="bg-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
     style={{ width: `${skill.percentage}%` }}
    ></div>
   </div>
  </div>
 );
}