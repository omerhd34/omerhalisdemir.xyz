'use client'

import { useState } from 'react';
import { useLanguage } from '../LanguageContext/LanguageContext';
import ContactHeader from './ContactHeader';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

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

 const resetForm = () => {
  setFormData({
   name: '',
   email: '',
   subject: '',
   message: ''
  });
 };

 const clearStatus = () => {
  setTimeout(() => {
   setSubmitStatus(null);
  }, 5000);
 };

 return (
  <section id="contact" className="py-30 bg-slate-900">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <ContactHeader language={language} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
     <ContactInfo language={language} />
     <ContactForm
      language={language}
      formData={formData}
      setFormData={setFormData}
      isSubmitting={isSubmitting}
      setIsSubmitting={setIsSubmitting}
      submitStatus={submitStatus}
      setSubmitStatus={setSubmitStatus}
      resetForm={resetForm}
      clearStatus={clearStatus}
     />
    </div>
   </div>
  </section>
 );
}