import { FaSpinner } from 'react-icons/fa';
import useFormSubmit from './useFormSubmit';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import FormStatusMessage from './FormStatusMessage';
import { content } from './localization';

export default function ContactForm({
 language,
 formData,
 setFormData,
 isSubmitting,
 setIsSubmitting,
 submitStatus,
 setSubmitStatus,
 resetForm,
 clearStatus
}) {
 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
   ...prevState,
   [name]: value
  }));
 };

 const handleSubmit = useFormSubmit({
  formData,
  setIsSubmitting,
  setSubmitStatus,
  resetForm,
  clearStatus
 });

 return (
  <div className="bg-gray-800 rounded-xl px-6 py-4 shadow-lg ">
   <form onSubmit={handleSubmit}>
    <FormInput
     id="name"
     name="name"
     label={content[language].name}
     value={formData.name}
     onChange={handleChange}
     required
    />

    <FormInput
     id="email"
     name="email"
     type="email"
     label={content[language].email}
     value={formData.email}
     onChange={handleChange}
     required
    />

    <FormInput
     id="subject"
     name="subject"
     label={content[language].subject}
     value={formData.subject}
     onChange={handleChange}
     required
    />

    <FormTextarea
     id="message"
     name="message"
     label={content[language].message}
     value={formData.message}
     onChange={handleChange}
     rows={3}
     required
    />

    <button
     type="submit"
     disabled={isSubmitting}
     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
    >
     {isSubmitting ? (
      <>
       <FaSpinner className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
       {content[language].sending}
      </>
     ) : (
      content[language].sendMessage
     )}
    </button>

    {submitStatus && (
     <FormStatusMessage
      status={submitStatus}
      successMessage={content[language].successMessage}
      errorMessage={content[language].errorMessage}
     />
    )}
   </form>
  </div>
 );
}