import { useTheme, useThemeDispatch } from './ThemeContext';

const ThemeBox = () => {
  const theme = useTheme();
  const dispatch = useThemeDispatch();

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem',
        margin: '1rem 0',
        width: '100%', 
        textAlign: 'center',
      }}
    >
      <h2 style={{ marginBottom: '1rem' }}>
        Current Theme: <strong>{theme}</strong>
      </h2>
      <button onClick={() => dispatch({ type: 'TOGGLE' })}>Toggle Theme</button>
    </div>
  );
};

export default ThemeBox;
