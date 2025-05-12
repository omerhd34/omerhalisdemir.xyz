import Link from 'next/link';
import ExperienceNumber from './ExperienceNumber';
import ExperienceAchievements from './ExperienceAchievements';
import DocumentButtons from './DocumentButtons';
import CompanyLogo from './CompanyLogo';

export default function ExperienceItem({
 experience,
 isVisible,
 openImageModal,
 language,
 delay
}) {
 const { id, title, company, companyLink, period, description, achievements, logo, documents } = experience;

 return (
  <div className="experience-item relative sm:pl-22" data-id={id}>
   <div className="absolute top-0 left-2 sm:left-[40px] h-full w-1 bg-blue-500/20 max-[720px]:hidden"></div>

   <ExperienceNumber id={id} isMobile={false} />

   <div
    className={`bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition duration-300 relative transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
     }`}
    style={{
     transitionDelay: `${delay}ms`,
     transitionDuration: '700ms'
    }}
   >
    <ExperienceNumber id={id} isMobile={true} />

    <div className="flex flex-row items-center justify-between mb-2 max-[440px]:flex-col max-[440px]:items-start">
     <h3 className="text-xl font-bold text-white">{title}</h3>
     <span className="text-blue-500 text-[17px] font-medium max-[440px]:mt-1">{period}</span>
    </div>

    <div className="text-gray-400 text-sm mb-4">
     <Link
      href={companyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:text-blue-300 transition duration-300"
     >
      {company}
     </Link>
    </div>

    <p className="text-gray-300 mb-4 text-[17px] lg:text-[20px] max-[460px]:text-[15px]">
     {description}
    </p>

    <ExperienceAchievements
     achievements={achievements}
     experienceId={id}
     language={language}
    />

    {id === 3 && documents && (
     <div className="mt-6 flex flex-wrap gap-2">
      <DocumentButtons
       documents={documents}
       openImageModal={openImageModal}
      />
     </div>
    )}

    <CompanyLogo
     company={company}
     logo={logo}
     link={companyLink}
     language={language}
    />
   </div>
  </div>
 );
}