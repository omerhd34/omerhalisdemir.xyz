export default function ContactInfoItem({ icon, title, value }) {
 return (
  <div className="flex items-start space-x-4">
   <div className="bg-blue-500/20 p-3 rounded-lg mt-1">
    {icon}
   </div>
   <div>
    <h4 className="font-bold text-[16px] sm:text-[18px]">{title}</h4>
    <p className="text-gray-400 mt-1 text-[16px] sm:text-[18px]">{value}</p>
   </div>
  </div>
 );
}