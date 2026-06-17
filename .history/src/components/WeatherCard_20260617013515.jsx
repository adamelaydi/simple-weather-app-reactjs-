import Place from './Place';
import Weather from './Weather';
// Material ui
import LanguageIcon from '@mui/icons-material/Language';

// Styling
import "../styling/weatherCard.css"
export default function WeatherCard(){
    return(
        <>
        <div className="card">
            
            <Place />
            <Weather />
        </div>
        <LanguageIcon onClick={()=>{
            if(localStorage.get)
        }} className='lang' />
        </>
    )
}