import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  en: { greeting: 'Hello', dateLabel: 'Date' },
  da: { greeting: 'Hej', dateLabel: 'Dato' },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
