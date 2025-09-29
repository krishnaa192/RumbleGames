import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../ThemeContext.jsx';
import '../i18.js';  // Just import to run initialization (no need to assign to a variable)
import { CustomThemeProvider } from './ThemeProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
      <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>
    
  </StrictMode>
);
