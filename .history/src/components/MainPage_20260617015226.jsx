import WeatherCard from "./WeatherCard"
import "../styling/MainPage.css"
import { useState } from "react"
import { LanguageContext } from "../context/LanguageContext";
export default function MainPage(){
    const [lang,setLang]=useState(local||"ar");
    return(
        <>
        <LanguageContext.Provider value={{lang,setLang}}>
            <div className="mainPage">
                <WeatherCard />
            </div>
        </LanguageContext.Provider>
        </>
    )
}