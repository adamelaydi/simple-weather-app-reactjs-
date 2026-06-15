import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
// react hooks
import { useContext } from 'react';
import { dataContext } from '../contexts/dataContext';
import "../styling/weather.css"
export default function Weather(){
    const {data,setData}=useContext(dataContext)
    return(
        <div className="weather">
                <div className="weatherInfo">
                    <div className="degree">
                        <div className="degreeValue">{data.temp}</div>
                        <div className="degreeIcon">
                            <CloudySnowingIcon className='weatherIcon' />
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
                <div className="icon">
                    <CloudySnowingIcon className='weatherIcon' />
                </div>
            </div>
    )
}