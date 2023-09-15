import { createTheme } from '@material-ui/core/styles';
// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1366,
      xl: 1920,
    },
  },
});

export default theme;
