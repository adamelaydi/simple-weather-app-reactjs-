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

// ========================================

export default function Place(){
    // 
        const {lang,setLang}=useContext(LanguageContext)    
        const {t ,i18n}=useTranslation();
        // i18n.changeLanguage("ar");
        useEffect(() => {
        moment().locale(lang||"ar");
        }, []); 
        return(
            <>
                <div className="info">
                    <h1>{t('egypt')}</h1>
                    <div className="date">{
                    moment().format("llll")    }</div>
                </div>
                <hr/>
            </>
        )
    }