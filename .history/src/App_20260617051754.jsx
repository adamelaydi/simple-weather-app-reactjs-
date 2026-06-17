// React hooks
import { useEffect ,useState } from "react"

// Contexts
import { dataContext } from "./contexts/dataContext"
import { LanguageContext } from "./contexts/LanguageContext";

// Component 
import "./components/MainPage"
import MainPage from "./components/MainPage"

// Styling 
import "./styling/App.css"


// Libraries

// Material ui
import {createTheme , ThemeProvider } from "@mui/material/styles"

// Translation << i18n Library >>
import './i18n';
import { useTranslation } from "react-i18next";

// ====================================
// ====================================


function App() {

//  DATA
  // Weather data State
const [weatherData,setData]=useState({});

  // LANGUAGES
    // Lang Translation Library
  const {t ,i18n}=useTranslation();
    // Lang State
  const [lang,setLang]=useState(localStorage.getItem("lang")||"ar");  
    // Changing App Lang
  useEffect(()=>{
    i18n.changeLanguage(lang); 
  },[lang])  

  // FONT FAMILY
  const theme=createTheme({
    typography:{
      fontFamily:["cairo"]
    },
    
  })

  // data
  useEffect(()=>{
    function getData(){
      a
    }
  })

  // ===================================
  
  return (
    <>
      <ThemeProvider theme={theme}>
          <LanguageContext.Provider value={{lang,setLang}}>
            <dataContext.Provider value={{weatherData,setData}}>
              <MainPage />
            </dataContext.Provider>
          </LanguageContext.Provider> 
      </ThemeProvider>
      
    </>
  )
}

export default App
