// COMPONENTS
import "moment/locale/ar";
// STYLING
import "../styling/place.css"
// HOOKS
import { useEffect ,useContext ,useState } from "react";
// CONTEXTS

// LIBRARIES
    // Date Library
import moment from "moment";

import { useTranslation } from 'react-i18next';


// ========================================

export default function Place(){
    const {lang , setLang}=useContext(LanguageContext)
    const {t ,i18n}=useTranslation();
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