import { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { enUS, da } from 'date-fns/locale';
import { TextField, Button } from '@mui/material';

const LocalizedBox = () => {
  const { language, setLanguage, translations } = useLanguage();
  const [selectedDate, setSelectedDate] = useState(null);

  // mapping for MUI date-fns locales
  const localeMap = {
    en: enUS,
    da: da,
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{translations[language].greeting}!</h2>

      <Button variant="outlined" onClick={() => setLanguage(language === 'en' ? 'da' : 'en')}>
        Switch to {language === 'en' ? 'Danish' : 'English'}
      </Button>

      <p>
        {translations[language].dateLabel}: {new Date().toLocaleDateString(language)}
      </p>

      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeMap[language]}>
        <DatePicker
          label={translations[language].dateLabel}
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
          renderInput={(params) => (
            <TextField {...params} style={{ marginTop: '1rem' }} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default LocalizedBox;
