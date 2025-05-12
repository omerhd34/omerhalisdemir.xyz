export default function ExperienceNumber({ id, isMobile }) {
 if (isMobile) {
  return (
   <div className="hidden max-[720px]:flex w-8 h-8 bg-gray-900 border-2 border-blue-500 rounded-full items-center justify-center absolute -top-4 left-1/2 transform -translate-x-1/2 mb-4 z-10">
    <span className="text-blue-500 text-xs font-bold">{id}</span>
   </div>
  );
 }

 return (
  <div className="absolute left-2 sm:left-[40px] w-8 h-8 bg-gray-900 border-2 border-blue-500 rounded-full transform -translate-x-1/2 flex items-center justify-center max-[720px]:hidden">
   <span className="text-blue-500 text-xs font-bold">{id}</span>
  </div>
 );
}