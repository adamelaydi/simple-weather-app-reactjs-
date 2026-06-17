// STYLING
import "../styling/weather.css"
// CONTEXTS
import { useContext} from 'react';
import { dataContext } from '../contexts/dataContext';
// Translation Library
import { useTranslation } from 'react-i18next';

// ============================================

export default function Weather(){
    // Using Data State
    const {Data,setData}=useContext(dataContext);
    // Using Translation Library
    const {t ,i18n}=useTranslation();
    
    return(
        <div className="weather">
                <div className="weatherInfo">
                    <div className="degree">
                        <div className="degreeValue">{Data.weatherData.temp}</div>
                        <div className="degreeIcon">
                            {Data.weatherData.icon}
                        </div>
                    </div>
                    <div className="describtion">
                        <p>{t(Data.weatherData.code)}</p>
                    </div>
                    <div className="minMax">
                        <span>{t("min")} </span>
                        <span>{Data.min} </span>
                        <span> | </span><span> {t("max")}</span>
                        <span>{Data.max}</span>
                    </div>
                </div>
                <div className="icon">
                    {weatherData.icon}
                </div>
            </div>
    )
}