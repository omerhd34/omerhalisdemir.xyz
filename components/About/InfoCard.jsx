export default function InfoCard({
 title,
 subtitle,
 isVisible,
 delay = 0,
 colSpan = 1,
 titleClassName = "text-xl md:text-3xl font-bold text-blue-500 mb-2"
}) {
 return (
  <div
   className={`bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:bg-gray-600 transition duration-300 ${colSpan > 1 ? `col-span-${colSpan}` : ''} transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
   style={{
    transitionDelay: `${delay}ms`,
    transitionDuration: '500ms',
    transitionProperty: 'transform, opacity'
   }}
  >
   <div className={titleClassName}>{title}</div>
   <div className="text-gray-300 text-sm">{subtitle}</div>
  </div>
 );
}