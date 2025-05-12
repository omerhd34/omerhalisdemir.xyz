'use client'
import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext/LanguageContext';
import ExperienceHeader from './ExperienceHeader';
import ExperienceList from './ExperienceList';
import DocumentModal from './DocumentModal';
import { useExperienceData } from './useExperienceData';

export default function Experience() {
 const { language } = useLanguage();
 const [showModal, setShowModal] = useState(false);
 const [modalContent, setModalContent] = useState(null);
 const [modalTitle, setModalTitle] = useState('');
 const [contentType, setContentType] = useState('image');
 const [visibleItems, setVisibleItems] = useState([]);

 // Get the experience data from the custom hook
 const { experiences } = useExperienceData(language);

 const openImageModal = (image, title) => {
  setModalContent(image);
  setModalTitle(title);
  setContentType('image');
  setShowModal(true);
 };

 const closeModal = () => {
  setShowModal(false);
 };

 // Set all items visible when component mounts
 useEffect(() => {
  setVisibleItems([1, 2, 3]);
 }, []);

 return (
  <section id="experience" className="py-30 bg-gray-800 overflow-hidden">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <ExperienceHeader language={language} />

    <ExperienceList
     experiences={experiences}
     visibleItems={visibleItems}
     openImageModal={openImageModal}
     language={language}
    />

    {showModal && contentType === 'image' && (
     <DocumentModal
      content={modalContent}
      title={modalTitle}
      onClose={closeModal}
     />
    )}
   </div>
  </section>
 );
}