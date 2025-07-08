import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './ThemeProvider';
import { LanguageProvider } from './LanguageContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <LanguageProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <App />
      </LocalizationProvider>
    </LanguageProvider>
  </ThemeProvider>
);
