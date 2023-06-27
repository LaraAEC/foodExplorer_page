import React from 'react';
import ReactDOM from 'react-dom/client';

import { useMediaQuery } from 'react-responsive';


import { ThemeProvider } from 'styled-components'; 
import GlobalStyles from './styles/global';
import theme from './styles/theme'; 

import { UserHome } from './pages/UserHome'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UserHome />
    </ThemeProvider>
    
  </React.StrictMode>,
)