'use client'
import { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export function useLanguage() {
 return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
 const [language, setLanguage] = useState('tr');

 useEffect(() => {
  try {
   const savedLanguage = localStorage.getItem('language');
   if (savedLanguage) {
    setLanguage(savedLanguage);
   }
  } catch (error) {
   console.error('Error accessing localStorage:', error);
  }
 }, []);

 const toggleLanguage = () => {
  const newLanguage = language === 'tr' ? 'en' : 'tr';
  setLanguage(newLanguage);

  try {
   localStorage.setItem('language', newLanguage);
   document.documentElement.lang = newLanguage;
   window.dispatchEvent(new StorageEvent('storage', {
    key: 'language',
    newValue: newLanguage
   }));
  } catch (error) {
   console.error('Error saving language to localStorage:', error);
  }
 };

 const value = {
  language,
  toggleLanguage
 };

 return (
  <LanguageContext.Provider value={value}>
   {children}
  </LanguageContext.Provider>
 );
}