import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// states
import { useState } from "react"
// contexts
import { LanguageContext } from "../contexts/LanguageContext";

const [lang,setLang]=useState(localStorage.getItem("lang")||"ar");
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContext.Provider value={{lang,setLang}}>
      <App />
    </LanguageContext.Provider>
  </StrictMode>,
)
