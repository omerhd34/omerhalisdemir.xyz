import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactInfoItem from './ContactInfoItem';
import SocialLinks from './SocialLinks';
import { content } from './localization';

export default function ContactInfo({ language }) {
 return (
  <div className="space-y-8">
   <h3 className="text-2xl font-bold mb-10">{content[language].contactInfo}</h3>

   <ContactInfoItem
    icon={<FaPhone className="w-6 h-6 text-blue-500" />}
    title={content[language].phone}
    value="+90 507 849 2903"
   />

   <ContactInfoItem
    icon={<FaEnvelope className="w-6 h-6 text-blue-500" />}
    title={content[language].email}
    value="omerhd16@outlook.com"
   />

   <ContactInfoItem
    icon={<FaMapMarkerAlt className="w-6 h-6 text-blue-500" />}
    title={content[language].location}
    value={content[language].locationValue}
   />

   <div className="pt-8">
    <SocialLinks language={language} />
   </div>
  </div>
 );
}