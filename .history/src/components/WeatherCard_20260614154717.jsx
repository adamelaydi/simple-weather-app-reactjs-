import Place from './Place';
imp
// Material ui
import LanguageIcon from '@mui/icons-material/Language';

// Styling
import "../styling/weatherCard.css"
export default function WeatherCard(){
    return(
        <>
        <div className="card">
            
            <Place />
           
        </div>
        <LanguageIcon className='lang' />
        </>
    )
}