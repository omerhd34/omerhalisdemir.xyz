import ProjectCard from './ProjectCard';

export default function ProjectsList({
 language,
 projects,
 content,
 visibleProjects,
 openGallery
}) {
 return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
   {projects.map((project) => (
    <ProjectCard
     key={project.id}
     project={project}
     language={language}
     content={content}
     isVisible={visibleProjects.includes(project.id)}
     openGallery={openGallery}
     delay={(project.id - 1) * 200}
    />
   ))}
  </div>
 );
}