export default function FormTextarea({
 id,
 name,
 label,
 value,
 onChange,
 rows = 5,
 required = false
}) {
 return (
  <div className="mb-3">
   <label
    htmlFor={id}
    className="block text-gray-400 mb-2 text-[16px] sm:text-[18px]"
   >
    {label}
   </label>
   <textarea
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    rows={rows}
    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
    required={required}
   ></textarea>
  </div>
 );
}