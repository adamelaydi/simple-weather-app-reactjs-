// Material ui
import LanguageIcon from '@mui/icons-material/Language';
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

                </div>
                <div className="weatherInfo">
                    <div className="degree">
                        
                    </div>
                </div>
            </div>
        </div>
        <LanguageIcon className='lang' />
        </>
    )
}