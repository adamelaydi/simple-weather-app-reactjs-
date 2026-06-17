// react hooks
import { useContext} from 'react';
import { dataContext } from '../contexts/dataContext';
import { useTranslation } from 'react-i18next';
import "../styling/weather.css"
export default function Weather(){
    const {weatherData,setData}=useContext(dataContext)
    const {t ,i18n}=useTranslation();
    return(
        <div className="weather">
                <div className="weatherInfo">
                    <div className="degree">
                        <div className="degreeValue">{weatherData.temp}</div>
                        <div className="degreeIcon">
                            {weatherData.icon}
                        </div>
                    </div>
                    <div className="describtion">
                        <p>{t(weatherData.code)}</p>
                    </div>
                    <div className="minMax">
                        <span>min: </span>
                        <span>{weatherData.min} </span>
                        <span> | </span><span> ()</span>
                        <span>{weatherData.max}</span>
                    </div>
                </div>
                <div className="icon">
                    {weatherData.icon}
                </div>
            </div>
    )
}