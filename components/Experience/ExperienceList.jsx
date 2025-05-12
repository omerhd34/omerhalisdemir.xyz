import ExperienceItem from './ExperienceItem';

export default function ExperienceList({
 experiences,
 visibleItems,
 openImageModal,
 language
}) {
 return (
  <div className="space-y-10">
   {experiences.map((exp) => (
    <ExperienceItem
     key={exp.id}
     experience={exp}
     isVisible={visibleItems.includes(exp.id)}
     openImageModal={openImageModal}
     language={language}
     delay={(exp.id - 1) * 200}
    />
   ))}
  </div>
 );
}