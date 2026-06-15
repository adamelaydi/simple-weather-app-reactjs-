import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
// react hooks
import { useContext} from 'react';
import { dataContext } from '../contexts/dataContext';
import "../styling/weather.css"
export default function Weather(){
    const {weatherData,setData}=useContext(dataContext)
    return(
        <div className="weather">
                <div className="weatherInfo">
                    <div className="degree">
                        <div className="degreeValue">{weatherData.temp}</div>
                        <div className="degreeIcon">
                            <CloudySnowingIcon className='weatherIcon' />
                        </div>
                    </div>
                    <div className="describtion">
                        <p>{weatherData.describtion}</p>
                    </div>
                    <div className="minMax">
                        <span>min: </span>
                        <span>{weatherData.min}</span>
                        <span> | max:</span>
                        <span>{weatherData.max}</span>
                    </div>
                </div>
                <div className="icon">
                    {weather}
                </div>
            </div>
    )
}