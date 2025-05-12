import Image from 'next/image';
import CloseButton from './gallery/CloseButton';
import NavigationButton from './gallery/NavigationButton';
import ThumbnailsStrip from './gallery/ThumbnailsStrip';

export default function ImageGallery({
 images,
 activeIndex,
 setActiveIndex,
 onClose,
 onNext,
 onPrev,
 language,
 content
}) {
 return (
  <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center p-4">
   <CloseButton onClose={onClose} />

   <div className="relative w-full max-w-4xl h-[60vh] flex items-center justify-center">
    <Image
     src={images[activeIndex]}
     alt={`${content[language].imageCounter} ${activeIndex + 1}`}
     className="max-h-full max-w-full object-contain"
     width={800}
     height={600}
    />

    {images.length > 1 && (
     <>
      <NavigationButton direction="prev" onClick={onPrev} />
      <NavigationButton direction="next" onClick={onNext} />
     </>
    )}
   </div>

   <ThumbnailsStrip
    images={images}
    activeIndex={activeIndex}
    setActiveIndex={setActiveIndex}
    language={language}
    content={content}
   />

   <div className="text-white mt-4">
    {activeIndex + 1} / {images.length}
   </div>
  </div>
 );
}