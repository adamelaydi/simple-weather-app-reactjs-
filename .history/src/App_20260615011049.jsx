// Component 
import "./components/MainPage"
import MainPage from "./components/MainPage"
// Styling 
import "./styling/App.css"
// material ui
import {createTheme , ThemeProvider } from "@mui/material/styles"

import axios from "axios"
function App() {
  const theme=createTheme({
    typography:{
      fontFamily:["cairo"]
    },
    
  })

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
