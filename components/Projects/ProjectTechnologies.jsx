export default function ProjectTechnologies({ technologies, language, content }) {
 return (
  <div className="mb-5 mt-auto">
   <h4 className="text-sm font-semibold text-blue-500 mb-2">{content[language].technologies}</h4>
   <div className="flex flex-wrap gap-2">
    {technologies.map((tech) => (
     <span key={tech} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
      {tech}
     </span>
    ))}
   </div>
  </div>
 );
}