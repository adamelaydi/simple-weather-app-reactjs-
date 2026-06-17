    import "../styling/place.css"
    import moment from "moment";
    import "moment/locale/ar";
    import { useEffect } from "react";
    import { useTranslation } from "react-i18next";
    export default function Place(){
        const {t ,i18n}=useTranslation();

        // i18n.changeLanguage("ar");
        useEffect(() => {
        // moment.locale("ar");
        }, []); 
        return(
            <>
                <div className="info">
                    <h1>{t('egypt')}</h1>
                    <div className="date">{
                    moment().locale("ar").format("ll")    }</div>
                </div>
                <hr/>
            </>
        )
    }