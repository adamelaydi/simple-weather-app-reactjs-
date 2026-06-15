import "./"
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
        
      </ThemeProvider>
      
    </>
  )
}

export default App
