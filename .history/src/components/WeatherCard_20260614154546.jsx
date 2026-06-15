import Place from './Place';
// Material ui
import LanguageIcon from '@mui/icons-material/Language';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
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