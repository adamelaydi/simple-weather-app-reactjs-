import "../styling/place.css"
import moment from "moment";
export default function Place(){
    return(
        <>
            <div className="info">
                <h1>egypt</h1>
                <div className="date">{
                moment().format('llll');}</div>
            </div>
            <hr/>
        </>
    )
}