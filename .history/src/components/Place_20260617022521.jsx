// COMPONENTS
import "moment/locale/ar";
// STYLING
    import "../styling/place.css"
    import moment from "moment";
    import { useEffect ,useContext } from "react";
    import { LanguageContext } from "../contexts/LanguageContext";
    import { useTranslation } from "react-i18next";
    export default function Place(){
        const {t ,i18n}=useTranslation();
        const {lang,setLang}=useContext(LanguageContext)    
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