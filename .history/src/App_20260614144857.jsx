import './styling/App.css'
import {createTheme , ThemeProvider } from "@mui/material/styles"
function App() {
  const theme=createTheme({
    typography:{
      fontFamily:"cairo"
    }
  })

  return (
    <>
      <ThemeProvider>
        
      </ThemeProvider>
      
    </>
  )
}

export default App
