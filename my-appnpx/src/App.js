import { ThemeContextProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';
import { CounterProvider } from './CounterContext';
import { TodoProvider } from './TodoContext';

import LocalizedBox from './LocalizedBox';
import ThemedBox from './ThemeBox';
import CounterBox from './CounterBox';
import TodoBox from './TodoBox';
import './AppLayout.css';


function App() {
  return (
    <div className="page-container">
      <ThemeContextProvider>
        <LanguageProvider>
          <LocalizedBox />
          <ThemedBox />
          <CounterProvider>
            <CounterBox />
          </CounterProvider>
          <TodoProvider>
            <TodoBox />
          </TodoProvider>
        </LanguageProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
