export default function DocumentButtons({ documents, openImageModal }) {
 return (
  <>
   {documents.map((doc) => (
    <button
     key={doc.id}
     onClick={() => {
      if (doc.type === 'image') {
       openImageModal(doc.image, doc.title);
      } else if (doc.type === 'pdf') {
       window.open(doc.pdfPath, '_blank');
      }
     }}
     className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md text-sm font-medium transition duration-300 cursor-pointer"
    >
     {doc.title}
    </button>
   ))}
  </>
 );
}