// Component 
import "./components/MainPage"
import MainPage from "./components/MainPage"
// Styling 
import "./styling/App.css"
// i 18 translation
// import i18n (needs to be bundled ;)) 

// material ui
import {createTheme , ThemeProvider } from "@mui/material/styles"
// Api
import GetWeather from "./APIs/weatherApi"
// React hooks
import { useEffect ,useState } from "react"
// Contexts
import { dataContext } from "./contexts/dataContext"
import { LanguageContext } from "./contexts/LanguageContext";

// Translation
import './i18n';
import { useTranslation } from "react-i18next";
function App() {
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
  
  // request the api

    // data state
  const [weatherData,setData]=useState({});
useEffect(()=>{
    async function fetchWeather() {
    const data = await GetWeather({lon:"55" ,lat:"77"});
    setData(data);
  }

  fetchWeather();
  },[])


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
