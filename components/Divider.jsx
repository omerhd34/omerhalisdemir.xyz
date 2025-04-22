'use client';
import Image from 'next/image';
import icon from '../public/icon.png';
import PropTypes from 'prop-types';

const Divider = ({ className = "" }) => {
 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: 'smooth'
  });
 };

 return (
  <div className={`w-full bg-black py-5 ${className}`}>
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-center">
     <div className="absolute left-0 w-1/3 flex items-center justify-start space-x-3">
      <div className="h-3 w-3 rounded-full bg-blue-700"></div>
      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
      <div className="h-1 w-1 rounded-full bg-blue-500"></div>
      <div className="flex-grow h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
     </div>

     <button
      className="z-5 bg-black p-3 rounded-full border-2 border-blue-500 cursor-pointer hover:border-blue-400 transition-colors duration-300"
      onClick={scrollToTop}
      aria-label="Sayfanın başına dön"
      type="button"
      onKeyDown={(e) => {
       if (e.key === 'Enter' || e.key === ' ') {
        scrollToTop();
       }
      }}
     >
      <div className="w-8 h-8 relative transition-transform duration-500 hover:scale-150">
       <Image
        src={icon}
        alt="Divider Icon"
        fill
        style={{ objectFit: 'contain' }}
       />
      </div>
     </button>

     <div className="absolute right-0 w-1/3 flex items-center justify-end space-x-3 flex-row-reverse">
      <div className="h-3 w-3 rounded-full bg-blue-700"></div>
      <div className="h-2 w-2 rounded-full bg-blue-600"></div>
      <div className="h-1 w-1 rounded-full bg-blue-500"></div>
      <div className="flex-grow h-px bg-gradient-to-l from-blue-500 to-transparent"></div>
     </div>
    </div>
   </div>
  </div>
 );
};

Divider.propTypes = {
 className: PropTypes.string
};

export default Divider;