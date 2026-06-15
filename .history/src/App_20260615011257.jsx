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
  useEffect(()=>{
    axios.get("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m", {
    params: {
      postId: 5,
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Request completed");
  });
  },[])
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainPage>
          
        </MainPage>
      </ThemeProvider>
      
    </>
  )
}

export default App
