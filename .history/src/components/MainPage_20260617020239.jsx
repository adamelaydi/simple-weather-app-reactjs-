import WeatherCard from "./WeatherCard"
import "../styling/MainPage.css"
import { useState } from "react"
export default function MainPage(){
    const [lang,setLang]=useState(localStorage.getItem("lang")||"ar");
    return(
        <>
        
            <div className="mainPage">
                <WeatherCard />
            </div>
        </LanguageContext.Provider>
        </>
    )
}