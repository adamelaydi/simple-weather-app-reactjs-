// Component 
import "./components/MainPage"
import MainPage from "./components/MainPage"
// Styling 
import "./styling/App.css"
// material ui
import {createTheme , ThemeProvider } from "@mui/material/styles"
// axios library
import axios from "axios"
// react hooks
import { useEffect } from "react"
function App() {
  const theme=createTheme({
    typography:{
      fontFamily:["cairo"]
    },
    
  })
  
  // request the api
  let data;
  useEffect(()=>{
    axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m,weather_code", {
  })
  .then((response) => {
    console.log(response);
    data={temp:response.data.current.temperature_2m,
      max:response.data.daily.temperature_2m_max[0],
      min:response.data.daily.temperature_2m_min[0],
      weatherCode:response.data.current.weather_code
    }
    console.log(data)
  })
  .catch((error) => {
    console.error(error);
  })
  },[])
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainPage />
          
      </ThemeProvider>
      
    </>
  )
}

export default App
