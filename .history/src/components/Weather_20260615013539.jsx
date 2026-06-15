import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
// react hooks
import { useContext } from 'react';
import { dataContext } from '../contexts/dataContext';
import "../styling/weather.css"
export default function Weather(){
    const {weatherata,setData}=useContext(dataContext)
    return(
        <div className="weather">
                <div className="weatherInfo">
                    <div className="degree">
                        <div className="degreeValue">{}</div>
                        <div className="degreeIcon">
                            <CloudySnowingIcon className='weatherIcon' />
                        </div>
                    </div>
                    <div className="describtion">
                        <p>broken clouds</p>
                    </div>
                    <div className="minMax">
                        <span>min: </span>
                        <span>{}</span>
                        <span> | max:</span>
                        <span>{}</span>
                    </div>
                </div>
                <div className="icon">
                    <CloudySnowingIcon className='weatherIcon' />
                </div>
            </div>
    )
}