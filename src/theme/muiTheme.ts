import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: { main: '#C4891A', contrastText: '#F5F0EB' },
    secondary: { main: '#2E3440', contrastText: '#F5F0EB' },
    background: { default: '#F5F0EB', paper: '#FAF7F3' },
    text: { primary: '#1E2530', secondary: '#6B7280' },
  },
  typography: {
    fontFamily: "'DM Sans', -apple-system, sans-serif",
    h1: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700 },
    h2: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 },
    h3: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 },
    h4: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 },
    h5: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 },
    h6: { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 },
    button: { fontFamily: "'DM Sans', sans-serif", fontWeight: 500, textTransform: 'none' as const },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 6, padding: '10px 24px', fontSize: '0.95rem' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontFamily: "'DM Sans', sans-serif", fontWeight: 500 },
      },
    },
  },
});

export default muiTheme;
