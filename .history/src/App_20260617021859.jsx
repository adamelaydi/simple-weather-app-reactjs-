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
  // Fetching Api 
useEffect(()=>{
    async function fetchWeather() {
    const data = await GetWeather({lon:"55" ,lat:"77"});
    setData(data);
  }
  fetchWeather();
  },[])
  
  const [lang,setLang]=useState(localStorage.getItem("lang")||"ar");  
  
  const {t ,i18n}=useTranslation();
    useEffect(()=>{
      console.log(lang)
      i18n.changeLanguage(lang); 
    },[lang])  


  const theme=createTheme({
    typography:{
      fontFamily:["cairo"]
    },
    
  })
  
 


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
