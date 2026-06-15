import "./components/MainPage"
import MainPage from "./components/MainPage"
import "./styling/App.css"
import {createTheme , ThemeProvider } from "@mui/material/styles"
function App() {
  const theme=createTheme({
    typography:{
      fontFamily:["cairo"]
    }
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
