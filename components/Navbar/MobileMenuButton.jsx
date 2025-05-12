export default function MobileMenuButton({ isOpen, toggleMenu }) {
 return (
  <button
   onClick={toggleMenu}
   className="inline-flex bg-gray-950 items-center justify-center p-2 rounded-2xl text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
   aria-expanded={isOpen}
   aria-label="Toggle menu"
  >
   {/* Hamburger icon when closed */}
   <svg
    className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
   >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
   </svg>

   {/* X icon when open */}
   <svg
    className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
   >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
   </svg>
  </button>
 );
}