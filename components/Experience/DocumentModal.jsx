import Image from 'next/image';

export default function DocumentModal({ content, title, onClose }) {
 return (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
   <div className="bg-gray-900 rounded-xl max-w-3xl w-full max-h-screen overflow-auto">
    <div className="p-4 border-b border-gray-700 flex justify-between items-center">
     <h3 className="text-xl font-bold text-white">{title}</h3>
     <button
      onClick={onClose}
      className="text-gray-400 hover:text-white cursor-pointer"
     >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
     </button>
    </div>
    <div className="p-4">
     <div className="relative w-full h-auto flex justify-center">
      <Image
       src={content}
       alt={title}
       width={800}
       height={600}
       style={{
        maxHeight: '70vh',
        width: 'auto',
        objectFit: 'contain'
       }}
      />
     </div>
    </div>
   </div>
  </div>
 );
}