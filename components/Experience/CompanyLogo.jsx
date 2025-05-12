import Link from 'next/link';
import Image from 'next/image';

export default function CompanyLogo({ company, logo, link, language }) {
 return (
  <div className="absolute bottom-4 right-4 md:block hidden">
   <Link
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block relative h-14 w-14 transition-transform duration-300 hover:scale-110"
    title={`${company} ${language === 'tr' ? 'web sitesini ziyaret et' : 'visit website'}`}
   >
    <Image
     src={logo}
     alt={`${company} logo`}
     width={60}
     height={60}
     style={{
      objectFit: 'contain',
      objectPosition: 'center'
     }}
    />
   </Link>
  </div>
 );
}