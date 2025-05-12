export default function FormStatusMessage({ status, successMessage, errorMessage }) {
 const isSuccess = status === 'success';

 return (
  <div className={`
      mt-4 p-3 rounded-lg
      ${isSuccess ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}
    `}>
   {isSuccess ? successMessage : errorMessage}
  </div>
 );
}