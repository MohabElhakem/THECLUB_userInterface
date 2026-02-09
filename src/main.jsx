import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n.js";
import "@fontsource/changa/400.css"; // Regular
import "@fontsource/changa/500.css"; // Medium
import "@fontsource/changa/700.css"; // Bold



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
