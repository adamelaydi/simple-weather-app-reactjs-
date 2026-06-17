import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// sta
// contexts
import { LanguageContext } from "../contexts/LanguageContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContext.Provider value={{lang,setLang}}>
      <App />
    </LanguageContext.Provider>
  </StrictMode>,
)
