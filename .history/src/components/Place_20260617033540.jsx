// COMPONENTS
import "moment/locale/ar";
// STYLING
import "../styling/place.css"
// HOOKS
import { useEffect ,useContext ,useState } from "react";
// CONTEXTS
import { LanguageContext } from "../contexts/LanguageContext";
// LIBRARIES
    // Date Library
import moment from "moment";

import 
import { GetLiveLocation } from "../APIs/liveLocation";

// ========================================

export default function Place(){
    const {lang , setLang}=useContext(LanguageContext)
        const [city, setCity] = useState(null);

    useEffect(() => {
        async function loadCity() {
        const data = await GetLiveLocation(lang);
        console.log(data)
        setCity(data);
        
        }

        loadCity();
    }, [lang]);

    useEffect(() => {
        moment.locale(lang);
    }, [lang]);
    
    
        return(
            <>
                <div className="info">
                <h1>{t(city)}</h1> 
                    <div className="date">{
                    moment().format("llll")    }</div>
                </div>
                <hr/>
            </>
        )
    }