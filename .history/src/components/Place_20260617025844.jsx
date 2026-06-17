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
    // Translation Library
import { useTranslation } from "react-i18next";
import { GetLiveLocation } from "../APIs/liveLocation";

// ========================================

export default function Place(){
    // LANGUAGE STATE CONTEXT
        const {lang,setLang}=useContext(LanguageContext);
    // TRANSLATION LIBRARY    
        const {t ,i18n}=useTranslation();
    // Changing the date name
   
    async function getcity() {
        return await GetLiveLocation();
    }
    let city = getcity();
    useEffect(() => {
        moment().locale(lang||"ar");
    }, []);
    
    
        return(
            <>
                <div className="info">
                    <h1>{city.add}</h1>
                    <div className="date">{
                    moment().format("llll")    }</div>
                </div>
                <hr/>
            </>
        )
    }