import WeatherCard from "./WeatherCard"
import "../styling/MainPage.css"
import { useState } from "react"
export default function MainPage(){
    
    return(
        <>
        <div className="mainPage">
            <WeatherCard />
        </div>
        </>
    )
}