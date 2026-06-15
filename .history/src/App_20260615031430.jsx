// Component 
import "./components/MainPage"
import MainPage from "./components/MainPage"
// Styling 
import "./styling/App.css"
// material ui
import {createTheme , ThemeProvider } from "@mui/material/styles"
// api
import GetWeather from "./APIs/weatherApi"
// react hooks
import { useEffect ,useState } from "react"
import { dataContext } from "./contexts/dataContext"
function App() {
  const theme=createTheme({
    typography:{
      fontFamily:["cairo"]
    },
    
  })
  
  // request the api

    // data state
  const [weatherData,setData]=useState({});
useEffect(()=>{
    async function fetchWeather({}) {
    const data = await GetWeather();
    setData(data);
  }

  fetchWeather();
  },[])


  return (
    <>
      <ThemeProvider theme={theme}>
        <dataContext.Provider value={{weatherData,setData}}>
          <MainPage />
        </dataContext.Provider>  
      </ThemeProvider>
      
    </>
  )
}

export default App
