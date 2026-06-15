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
        <h1 style={{}}>ادم ابراهيم سيد </h1>
      </ThemeProvider>
      
    </>
  )
}

export default App
