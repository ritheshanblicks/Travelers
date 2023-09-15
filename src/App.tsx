import React from 'react';
import './theme/styles/global.scss';
import Routes from './components/router/Routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import theme from './theme/themes/theme';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
