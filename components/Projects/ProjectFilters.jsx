export default function ProjectFilters({ language, content, currentFilter, setFilter }) {
 const filterTypes = [
  { key: 'all', label: content[language].filterAll },
  { key: 'electric_electronics', label: content[language].filterElectronics },
  { key: 'frontend', label: content[language].filterFrontend }
 ];

 return (
  <div className="flex flex-wrap justify-center -mt-[25px] mb-10 gap-4">
   {filterTypes.map((type) => (
    <button
     key={type.key}
     onClick={() => setFilter(type.key)}
     className={`px-4 py-2 rounded-md text-[16px] sm:text-[18px] font-medium transition ${currentFilter === type.key
      ? 'bg-blue-600 text-white'
      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
    >
     {type.label}
    </button>
   ))}
  </div>
 );
}