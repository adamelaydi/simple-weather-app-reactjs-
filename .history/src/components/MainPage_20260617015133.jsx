import WeatherCard from "./WeatherCard"
import "../styling/MainPage.css"
import { useState } from "react"
import { LanguageContext } from "../context/LanguageContext";
export default function MainPage(){
    const [lang,setLang]=useState("ar");
    return(
        <>
        <LanguageContex.Provider ></LanguageContex.Provider>
        <div className="mainPage">
            <WeatherCard />
        </div>
        </>
    )
}