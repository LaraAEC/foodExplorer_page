import React from 'react';
import ReactDOM from 'react-dom/client';


import { ThemeProvider } from 'styled-components'; 
import GlobalStyles from './styles/global';
import theme from './styles/theme'; 

import { AdminNewDish } from './pages/Admin/AdminNewDish'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AdminNewDish />
    </ThemeProvider>
    
  </React.StrictMode>,
)