import { content } from './localization';
import InfoCard from './InfoCard';
import SocialLinks from './SocialLinks';
import UniversityCard from './UniversityCard';

export default function InfoCards({ language, isVisible }) {
 return (
  <div className="grid grid-cols-2 gap-4">
   {/* Full Name Card */}
   <InfoCard
    title="Ömer Halis DEMİR"
    subtitle={content[language].fullName}
    isVisible={isVisible}
    delay={0}
    colSpan={2}
   />

   {/* Birth Date Card */}
   <InfoCard
    title="29.03.1998"
    subtitle={content[language].birthDate}
    isVisible={isVisible}
    delay={100}
   />

   {/* City Card */}
   <InfoCard
    title="İstanbul"
    subtitle={content[language].city}
    isVisible={isVisible}
    delay={200}
   />

   {/* University Card */}
   <UniversityCard language={language} isVisible={isVisible} />

   {/* Email Card */}
   <InfoCard
    title="omerhd16@outlook.com"
    subtitle={content[language].email}
    isVisible={isVisible}
    delay={400}
    titleClassName="text-lg sm:text-xl md:text-2xl font-bold text-blue-500 mb-2 truncate w-full"
   />

   {/* Social Links Card */}
   <SocialLinks
    language={language}
    isVisible={isVisible}
   />
  </div>
 );
}