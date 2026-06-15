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
        </div>
        <LanguageIcon className='lang' />
        </>
    )
}