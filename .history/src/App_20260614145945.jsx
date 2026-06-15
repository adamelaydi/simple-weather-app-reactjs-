import "./components/MainPage"
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
        <Main
      </ThemeProvider>
      
    </>
  )
}

export default App
