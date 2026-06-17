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

import { GetLiveLocation } from "../APIs/liveLocation";

// ========================================

export default function Place(){
        const [city, setCity] = useState(null);

    useEffect(() => {
        async function loadCity() {
        const data = await GetLiveLocation("en");
        setCity(data);
        }

        loadCity();
    }, []);

    useEffect(() => {
        moment.locale("ar");
    }, []);
    
    
        return(
            <>
                <div className="info">
                    <h1>{city.address.city}</h1>
                    <div className="date">{
                    moment().format("llll")    }</div>
                </div>
                <hr/>
            </>
        )
    }