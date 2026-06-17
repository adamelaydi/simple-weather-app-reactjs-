import "../styling/place.css"
import moment from "moment";
import { useTranslation } from "react-i18next";
export default function Place(){
    const {t ,i18n}=useTranslation();
    return(
        <>
            <div className="info">
                <h1>{t('egypt')}</h1>
                <div className="date">{
                npm install i18next-browser-languagedetectormoment().format('LLLL')}</div>
            </div>
            <hr/>
        </>
    )
}