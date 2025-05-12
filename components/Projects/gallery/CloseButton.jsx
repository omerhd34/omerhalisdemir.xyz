export default function CloseButton({ onClose }) {
 return (
  <button
   onClick={onClose}
   className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
   aria-label="Close gallery"
  >
   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
   </svg>
  </button>
 );
}