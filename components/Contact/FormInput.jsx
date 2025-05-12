export default function FormInput({
 id,
 name,
 type = "text",
 label,
 value,
 onChange,
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
   <input
    type={type}
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
    required={required}
   />
  </div>
 );
}