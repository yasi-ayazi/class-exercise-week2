import { createContext, useReducer, useContext } from 'react';

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return state === 'light' ? 'dark' : 'light';
    default:
      return state;
  }
};

const ThemeStateContext = createContext();
const ThemeDispatchContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, 'light');

  return (
    <ThemeStateContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeStateContext);
export const useThemeDispatch = () => useContext(ThemeDispatchContext);
export { ThemeContextProvider };
