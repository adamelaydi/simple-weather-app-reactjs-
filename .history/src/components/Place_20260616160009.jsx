import "../styling/place.css"
import moment from "moment";
import { useTranslation } from "react-i18next";
export default function Place(){
    const {t ,i18}
    return(
        <>
            <div className="info">
                <h1>egypt</h1>
                <div className="date">{
                moment().format('LLLL')}</div>
            </div>
            <hr/>
        </>
    )
}