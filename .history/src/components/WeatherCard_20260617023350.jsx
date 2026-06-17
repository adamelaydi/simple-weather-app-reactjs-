// Components
import Place from './Place';
import Weather from './Weather';

//Hooks
import { useContext } from 'react';

// Material ui
import LanguageIcon from '@mui/icons-material/Language';

// Styling
import "../styling/weatherCard.css"

// Contexts
import { LanguageContext } from '../contexts/LanguageContext';

// ========================================================

export default function WeatherCard(){
    // Using Lang State Context
    const {lang,setLang}=useContext(LanguageContext)

    // Handle Lang button click Func...
    function HandleLanguageClick(){
        if(localStorage.getItem("lang")===null||localStorage.getItem("lang")==="ar"){
            localStorage.setItem("lang","en");
            setLang("en");
        }else if(localStorage.getItem("lang")==="en"){
            localStorage.setItem("lang","ar");
            setLang("ar");
        }
    }

    return(
        <>
        <div className="card" style={{direction:(lang==="ar")?"rtl":"ltr",}}>
            <Place />
            <Weather />
        </div>
        <LanguageIcon onClick={()=>{HandleLanguageClick()}} className='lang' />
        </>
    )
}