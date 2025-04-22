'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useLanguage } from './LanguageContext';

export default function Contact() {
 const { language } = useLanguage();
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
 });

 const [isSubmitting, setIsSubmitting] = useState(false);
 const [submitStatus, setSubmitStatus] = useState(null);

 const content = {
  tr: {
   title: "İletişime Geç",
   subtitle: "Merhaba! Görüşlerinizi veya sorularınızı duymaktan mutluluk duyarım. Size en kısa sürede geri döneceğim.",
   contactInfo: "İletişim Bilgileri",
   phone: "Telefon",
   email: "Email",
   location: "Konum",
   locationValue: "İstanbul, Türkiye",
   name: "İsim",
   subject: "Konu",
   message: "Mesaj",
   sendMessage: "Mesaj Gönder",
   sending: "Gönderiliyor...",
   successMessage: "Mesajınız başarıyla gönderildi. En kısa zamanda size dönüş yapacağım.",
   errorMessage: "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
   cvPath: "/cv.pdf"
  },
  en: {
   title: "Contact Me",
   subtitle: "Hello! I would be happy to hear your feedback or questions. I will get back to you as soon as possible.",
   contactInfo: "Contact Information",
   phone: "Phone",
   email: "Email",
   location: "Location",
   locationValue: "İstanbul, Türkiye",
   name: "Name",
   subject: "Subject",
   message: "Message",
   sendMessage: "Send Message",
   sending: "Sending...",
   successMessage: "Your message has been successfully sent. I will get back to you as soon as possible.",
   errorMessage: "An error occurred while sending the message. Please try again later.",
   cvPath: "/cv-english.pdf"
  }
 };

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prevState => ({
   ...prevState,
   [name]: value
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const templateParams = {
   from_name: formData.name,
   from_email: formData.email,
   subject: formData.subject,
   message: formData.message,
   reply_to: formData.email
  };

  emailjs.send(
   'service_63m95wk', // EmailJS servis ID'niz
   'template_mq605oh', // Şablon ID
   templateParams,
   'uhxSnflDYchCSCnVr' // Public Key
  )
   .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
    setIsSubmitting(false);
    setSubmitStatus('success');

    setFormData({
     name: '',
     email: '',
     subject: '',
     message: ''
    });

    setTimeout(() => {
     setSubmitStatus(null);
    }, 5000);
   })
   .catch((err) => {
    console.log('FAILED...', err);
    setIsSubmitting(false);
    setSubmitStatus('error');

    setTimeout(() => {
     setSubmitStatus(null);
    }, 5000);
   });
 };

 return (
  <section id="contact" className="py-30 bg-slate-900">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
     <h2 className="text-3xl md:text-4xl font-bold mb-4">{content[language].title}</h2>
     <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
     <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-[16px] sm:text-[18px]">
      {content[language].subtitle}
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
     <div className="space-y-8">
      <h3 className="text-2xl font-bold mb-6">{content[language].contactInfo}</h3>
      <div className="flex items-start space-x-4">
       <div className="bg-blue-500/20 p-3 rounded-lg mt-1">
        <FaPhone className="w-6 h-6 text-blue-500" />
       </div>
       <div>
        <h4 className="font-bold text-[16px] sm:text-[18px]">{content[language].phone}</h4>
        <p className="text-gray-400 mt-1 text-[16px] sm:text-[18px]">+90 507 849 2903</p>
       </div>
      </div>

      <div className="flex items-start space-x-4">
       <div className="bg-blue-500/20 p-3 rounded-lg mt-1">
        <FaEnvelope className="w-6 h-6 text-blue-500" />
       </div>
       <div>
        <h4 className="font-bold text-[16px] sm:text-[18px]">{content[language].email}</h4>
        <p className="text-gray-400 mt-1 text-[16px] sm:text-[18px]">omerhd16@outlook.com</p>
       </div>
      </div>

      <div className="flex items-start space-x-4">
       <div className="bg-blue-500/20 p-3 rounded-lg mt-1">
        <FaMapMarkerAlt className="w-6 h-6 text-blue-500" />
       </div>
       <div>
        <h4 className="font-bold text-[16px] sm:text-[18px]">{content[language].location}</h4>
        <p className="text-gray-400 mt-1 text-[16px] sm:text-[18px]">{content[language].locationValue}</p>
       </div>
      </div>

      <div className="pt-8">
       <div className="flex items-center justify-start max-[864px]:justify-center gap-3 sm:gap-5 mt-1">
        <Link
         href="https://www.linkedin.com/in/%C3%B6mer-halis-demir-7a9b79169/"
         target="_blank"
         rel="noopener noreferrer"
         className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-[#0077b5] text-[#0077b5] hover:text-white hover:bg-[#0077b5] transition duration-500 ease-in-out"
        >
         <FaLinkedinIn size={20} />
        </Link>
        <Link
         href="https://github.com/omerhd34"
         target="_blank"
         rel="noopener noreferrer"
         className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-[#ff0000] text-[#ff0000] hover:text-white hover:bg-[#ff0000] transition duration-500 ease-in-out"
        >
         <FaGithub size={20} />
        </Link>
        <Link
         href={content[language].cvPath}
         target="_blank"
         rel="noopener noreferrer"
         className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-300 hover:text-white hover:bg-black transition duration-500 ease-in-out font-bold text-sm"
        >
         CV
        </Link>
       </div>
      </div>
     </div>

     {/* İletişim Formu */}
     <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <form onSubmit={handleSubmit}>
       <div className="mb-3">
        <label htmlFor="name" className="block text-gray-400 mb-2 text-[16px] sm:text-[18px]">{content[language].name}</label>
        <input
         type="text"
         id="name"
         name="name"
         value={formData.name}
         onChange={handleChange}
         className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
         required
        />
       </div>

       <div className="mb-3">
        <label htmlFor="email" className="block text-gray-400 mb-2 text-[16px] sm:text-[18px]">{content[language].email}</label>
        <input
         type="email"
         id="email"
         name="email"
         value={formData.email}
         onChange={handleChange}
         className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
         required
        />
       </div>

       <div className="mb-3">
        <label htmlFor="subject" className="block text-gray-400 mb-2 text-[16px] sm:text-[18px]">{content[language].subject}</label>
        <input
         type="text"
         id="subject"
         name="subject"
         value={formData.subject}
         onChange={handleChange}
         className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
         required
        />
       </div>

       <div className="mb-3">
        <label htmlFor="message" className="block text-gray-400 mb-2 text-[16px] sm:text-[18px]">{content[language].message}</label>
        <textarea
         id="message"
         name="message"
         value={formData.message}
         onChange={handleChange}
         rows="5"
         className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-blue-500 transition duration-300"
         required
        ></textarea>
       </div>

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

       {submitStatus === 'success' && (
        <div className="mt-4 bg-green-500/20 text-green-500 p-3 rounded-lg">
         {content[language].successMessage}
        </div>
       )}

       {submitStatus === 'error' && (
        <div className="mt-4 bg-red-500/20 text-red-500 p-3 rounded-lg">
         {content[language].errorMessage}
        </div>
       )}
      </form>
     </div>
    </div>
   </div>
  </section>
 );
}