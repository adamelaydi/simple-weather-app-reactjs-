import "../styling/place.css"
import moment from "moment";
import useTra
export default function Place(){
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