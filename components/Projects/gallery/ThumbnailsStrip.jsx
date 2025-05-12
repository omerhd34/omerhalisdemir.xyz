import Image from 'next/image';

export default function ThumbnailsStrip({
 images,
 activeIndex,
 setActiveIndex,
 language,
 content
}) {
 return (
  <div className="flex mt-4 space-x-2 overflow-x-auto max-w-full p-2">
   {images.map((img, index) => (
    <button
     key={index}
     onClick={() => setActiveIndex(index)}
     className={`flex-shrink-0 w-20 h-20 border-2 ${index === activeIndex ? 'border-blue-500' : 'border-transparent'
      }`}
     aria-label={`${content[language].imageCounter} ${index + 1}`}
     aria-current={index === activeIndex}
    >
     <Image
      src={img}
      alt={`${content[language].imageCounter} ${index + 1}`}
      className="w-full h-full object-cover"
      width={80}
      height={80}
     />
    </button>
   ))}
  </div>
 );
}