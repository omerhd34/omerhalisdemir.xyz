export default function TypedText({ typedText }) {
 return (
  <div className="min-h-10 mb-1">
   <h3 className="text-xl xs:text-2xl sm:text-3xl font-medium">
    <span className="text-blue-500 text-[20px] sm:text-[27px] md:text-[33px] lg:text-[37px]">
     {typedText}
    </span>
    <span className="animate-blink">|</span>
   </h3>
  </div>
 );
}