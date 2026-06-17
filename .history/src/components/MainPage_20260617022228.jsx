// COMPONENTS
import WeatherCard from "./WeatherCard"
// STYLING
import "../styling/MainPage.css" 

//===============================
export default function MainPage(){
    return(
        <>
            <div className="mainPage">
                <WeatherCard />
            </div>
        </>
    )
}