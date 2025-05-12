'use client'
import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext/LanguageContext';
import ProjectsHeader from './ProjectsHeader';
import ProjectFilters from './ProjectFilters';
import ProjectsList from './ProjectsList';
import ImageGallery from './ImageGallery';
import { useProjectsData } from './useProjectsData';

export default function Projects() {
 const { language } = useLanguage();
 const [filter, setFilter] = useState('all');
 const [showGallery, setShowGallery] = useState(false);
 const [galleryImages, setGalleryImages] = useState([]);
 const [activeImageIndex, setActiveImageIndex] = useState(0);
 const [visibleProjects, setVisibleProjects] = useState([]);

 const { projects, filteredProjects, content } = useProjectsData(language, filter);

 useEffect(() => {
  const projectIds = projects.map(project => project.id);
  setVisibleProjects(projectIds);
 }, [projects]);

 useEffect(() => {
  setVisibleProjects([]);

  setTimeout(() => {
   const filteredIds = filteredProjects.map(project => project.id);
   setVisibleProjects(filteredIds);
  }, 100);
 }, [filter, language, filteredProjects]);

 const openGallery = (images, index = 0) => {
  setGalleryImages(images.map(img => typeof img === 'string' ? img : img.src));
  setActiveImageIndex(index);
  setShowGallery(true);
  document.body.style.overflow = 'hidden';
 };

 const closeGallery = () => {
  setShowGallery(false);
  document.body.style.overflow = 'auto';
 };

 const nextImage = () => {
  setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
 };

 const prevImage = () => {
  setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
 };

 return (
  <section id="projects" className="py-30 bg-gray-800 overflow-hidden">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <ProjectsHeader language={language} content={content} />

    <ProjectFilters
     language={language}
     content={content}
     currentFilter={filter}
     setFilter={setFilter}
    />

    <ProjectsList
     language={language}
     projects={filteredProjects}
     content={content}
     visibleProjects={visibleProjects}
     openGallery={openGallery}
    />
   </div>

   {showGallery && (
    <ImageGallery
     images={galleryImages}
     activeIndex={activeImageIndex}
     setActiveIndex={setActiveImageIndex}
     onClose={closeGallery}
     onNext={nextImage}
     onPrev={prevImage}
     language={language}
     content={content}
    />
   )}
  </section>
 );
}