import Image from 'next/image';
import img1 from '../../public/img.jpg';

export default function HeroImage({ isHovered, onMouseEnter, onMouseLeave }) {
 return (
  <div className="flex justify-center mt-0">
   <div
    className="relative w-48 h-48 xs:w-64 xs:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-all duration-300"
    style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
   >
    <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
    <div className="absolute inset-3 xs:inset-4 rounded-full bg-blue-500 opacity-20 animate-pulse delay-300"></div>
    <div className="absolute inset-6 xs:inset-8 rounded-full bg-gray-800 border-2 xs:border-4 border-blue-500 shadow-2xl overflow-hidden">
     <div className="w-full h-full bg-gray-700 flex items-center justify-center text-3xl font-bold text-blue-500">
      <Image
       src={img1}
       alt="Ömer Halis DEMİR"
       width={400}
       height={400}
       className="w-full h-full object-cover"
       priority
      />
     </div>
    </div>
   </div>
  </div>
 );
}