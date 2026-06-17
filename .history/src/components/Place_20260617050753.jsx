// COMPONENTS
import "moment/locale/ar";
// STYLING
import "../styling/place.css"
// HOOKS
import { useEffect ,useContext ,useState } from "react";
// CONTEXTS
import { LanguageContext } from "../contexts/LanguageContext";
import { coordsContext } from "../contexts/coordsContext";
// LIBRARIES
    // Date Library
import moment from "moment";

import { useTranslation } from 'react-i18next';


// ========================================

export default function Place(){
    const {lang , setLang}=useContext(LanguageContext)
    const [city, setCity] = useState(null);
    const {t ,i18n}=useTranslation();
    const {coords,setCoords}=useContext(coordsContext);
    setCoords
    useEffect(() => {
        moment.locale(lang);
    }, [lang]);
    
    
        return(
            <>
                <div className="info">
                <h1>{t(city.city)}</h1> 
                    <div className="date">{
                    moment().format("llll")    }</div>
                </div>
                <hr/>
            </>
        )
    }