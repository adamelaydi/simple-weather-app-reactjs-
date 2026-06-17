import WeatherCard from "./WeatherCard"
import "../styling/MainPage.css"
import { useState } from "react"
import Lang
export default function MainPage(){
    const [lang,setLang]=useState("ar");
    return(
        <>
        <div className="mainPage">
            <WeatherCard />
        </div>
        </>
    )
}