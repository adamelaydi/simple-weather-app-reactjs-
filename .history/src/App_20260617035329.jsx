// React hooks
import { useEffect ,useState } from "react"

// Contexts
import { dataContext } from "./contexts/dataContext"
import { LanguageContext } from "./contexts/LanguageContext";
import { coordsContext } from "./contexts/coordsContext";

// Component 
import "./components/MainPage"
import MainPage from "./components/MainPage"

// Styling 
import "./styling/App.css"

// Api
import GetWeather from "./APIs/weatherApi"

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
const [coords,setCoords]=useState(null);
console.l
  // Fetching Api 
useEffect(()=>{
    async function fetchWeather() {
    const data = await GetWeather(coords);
    setData(data);
  }
  fetchWeather();
  },[])

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

  // ===================================
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <coordsContext.Provider value={{coords,setCoords}}>
          <LanguageContext.Provider value={{lang,setLang}}>
            <dataContext.Provider value={{weatherData,setData}}>
              <MainPage />
            </dataContext.Provider>
          </LanguageContext.Provider>
        </coordsContext.Provider>  
      </ThemeProvider>
      
    </>
  )
}

export default App
