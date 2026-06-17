// COMPONENTS
import "moment/locale/ar";
// STYLING
import "../styling/place.css"
// HOOKS
import { useEffect ,useContext } from "react";
// CONTEXTS
import { LanguageContext } from "../contexts/LanguageContext";
// LIBRARIES
    // Date Library
import moment from "moment";

import { useTranslation } from 'react-i18next';

import { dataContext } from "../contexts/dataContext";

// ========================================

export default function Place(){
    const {lang , setLang}=useContext(LanguageContext)
    const {t ,i18n}=useTranslation();
    useEffect(() => {
        moment.locale(lang);
    }, [lang]);
    
    const {Data,setData}=useContext(dataContext);
        return(
            <>
                <div className="info">
                <h1>{Data.cityName}</h1> 
                    <div className="date">{
                    moment().format("llll")    }</div>
                </div>
                <hr/>
            </>
        )
    }