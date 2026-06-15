// Material ui
import LanguageIcon from '@mui/icons-material/Language';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
// Styling
import "../styling/weatherCard.css"
export default function WeatherCard(){
    return(
        <>
        <div className="card">
            <div className="info">
                <h1>egypt</h1>
                <div className="date">2 jun 2026</div>
            </div>
            <hr />
            <div className="weather">
                <div className="icon">
                    <CloudySnowingIcon className='wea' />
                </div>
                <div className="weatherInfo">
                    <div className="degree">
                        <div className="degreeValue">

                        </div>
                        <div className="degreeIcon">

                        </div>
                    </div>
                    <div className="describtion">
                        <p>broken clouds</p>
                    </div>
                    <div className="minMax">
                        <span>min: </span>
                        <span>15</span>
                        <span> | max:</span>
                        <span>30</span>
                    </div>
                </div>
            </div>
        </div>
        <LanguageIcon className='lang' />
        </>
    )
}