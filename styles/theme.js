import { createTheme } from '@mui/material/styles';
// Create a theme instance.
const Theme = createTheme({
  status: {
    danger: '#e53e3e',
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },

  typography: {
    fontFamily: "'Montserrat', 'sans-serif'",
    h1: {
      fontSize: 50,
      color: '#f8f8f8',
      letterSpacing: 0.6,
      lineHeight: 3,
      fontWeight: 500,
    },
    h5: {
      '@media (min-width:0px)': {
        fontSize: 60,
        color: '#40D4A8',
        letterSpacing: 0.6,
        fontWeight: 500,
      },
    },
    h3: {
      '@media (min-width:900px)': {
        fontSize: 90,
        color: '#09c6f9',
        letterSpacing: 1,
        fontWeight: 500,
        lineHeight: 3,
      },
      '@media (max-width:900px)': {
        fontSize: 48,
        color: '#00dd73',
        letterSpacing: 1,
        fontWeight: 600,
        lineHeight: 3,
      },
    },
  },

  palette: {
    mode: 'dark',
    primary: {
      main: '#40D4A8',
    },
    secondary: {
      main: '#F8F2E9',
    },
    info: {
      main: '#09c6f9',
    },
    error: {
      main: '#FF5555',
    },

    divider: '#09c6f9',
    text: {
      primary: '#D9F6EF',
      secondary: '#ffffff',
    },
    // secondary: red,
    background: {
      default: '#000E10',
      paper: '',
    },
  },
});

export default Theme;
