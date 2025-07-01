import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContextProvider, useTheme } from './ThemeContext';

const MuiThemeWrapper = ({ children }) => {
  const theme = useTheme();

  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
  });

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};

const AppThemeProvider = ({ children }) => (
  <ThemeContextProvider>
    <MuiThemeWrapper>{children}</MuiThemeWrapper>
  </ThemeContextProvider>
);

export default AppThemeProvider;
