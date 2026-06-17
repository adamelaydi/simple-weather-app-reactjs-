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
                        <div className="degreeValue">{t(`${weatherData.temp}`)}</div>
                        <div className="degreeIcon">
                            {t(`${weatherData.icon}`)}
                        </div>
                    </div>
                    <div className="describtion">
                        <p>{t(`${weatherData.describtion}`)}</p>
                    </div>
                    <div className="minMax">
                        <span>min: </span>
                        <span>{t(`${weatherData.min}`)}</span>
                        <span> | max:</span>
                        <span>{t(`${weatherData.max}`)}</span>
                    </div>
                </div>
                <div className="icon">
                    {weatherData.icon}
                </div>
            </div>
    )
}