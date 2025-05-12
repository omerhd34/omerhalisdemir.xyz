export default function NavigationButton({ direction, onClick }) {
 return (
  <button
   onClick={onClick}
   className={`absolute ${direction === 'prev' ? 'left-2' : 'right-2'} bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition`}
   aria-label={direction === 'prev' ? 'Previous image' : 'Next image'}
  >
   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth="2"
     d={direction === 'prev' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
    />
   </svg>
  </button>
 );
}