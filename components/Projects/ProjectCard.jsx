import Image from 'next/image';
import Link from 'next/link';
import ProjectTechnologies from './ProjectTechnologies';
import GithubIcon from './icons/GithubIcon';

export default function ProjectCard({
 project,
 language,
 content,
 isVisible,
 openGallery,
 delay
}) {
 return (
  <div
   className={`bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/10 transition duration-700 transform hover:-translate-y-2 flex flex-col h-full ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
    }`}
   style={{
    transitionDelay: `${delay}ms`
   }}
  >
   {/* Project Image Header */}
   <div className="h-48 bg-gray-700 relative flex items-center justify-center overflow-hidden">
    <Image
     src={project.image}
     alt={project.title}
     className="w-full h-full object-cover"
     width={400}
     height={200}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
    <div className="absolute bottom-0 left-0 p-4 w-full">
     <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
     <div className="inline-block px-2 py-1 bg-blue-600 rounded-md text-xs font-medium text-white">
      {project.category === 'electric_electronics'
       ? content[language].filterElectronics.split('(')[0].trim()
       : content[language].filterFrontend.split('(')[0].trim()}
     </div>
    </div>
   </div>

   {/* Project Content */}
   <div className="p-6 flex flex-col flex-grow">
    <p className="text-gray-300 text-sm leading-relaxed mb-4">
     {project.description}
    </p>

    <ProjectTechnologies
     technologies={project.technologies}
     language={language}
     content={content}
    />

    {/* Project Links */}
    <div className="flex justify-between border-t border-gray-800 pt-4 mt-auto">
     {project.category === 'electric_electronics' && project.images.length > 0 && (
      <button
       onClick={() => openGallery(project.images)}
       className="text-blue-500 hover:text-blue-400 font-medium flex items-center transition"
      >
       <span>{content[language].view}</span>
      </button>
     )}

     {project.category !== 'electric_electronics' && project.demoLink && (
      <Link
       href={project.demoLink}
       target="_blank"
       rel="noopener noreferrer"
       className="text-blue-500 hover:text-blue-400 font-medium flex items-center transition"
      >
       <span>{content[language].view}</span>
      </Link>
     )}

     {project.githubLink && (
      <Link
       href={project.githubLink}
       target="_blank"
       rel="noopener noreferrer"
       className="text-gray-400 hover:text-white transition flex items-center"
      >
       <GithubIcon />
      </Link>
     )}
    </div>
   </div>
  </div>
 );
}