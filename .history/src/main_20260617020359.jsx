import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// contexts

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContext.Provider value={{lang,setLang}}>
      <App />
    </LanguageContext.Provider>
  </StrictMode>,
)
