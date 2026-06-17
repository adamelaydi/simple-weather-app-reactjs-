import Place from './Place';
import Weather from './Weather';
// Material ui
import LanguageIcon from '@mui/icons-material/Language';

// Styling
import "../styling/weatherCard.css"
export default function WeatherCard(){
    const {lang,setLang}=useContext(LanguageContext)
    return(
        <>
        <div className="card" style={{
            direction:(localStorage.getItem("lang")==="ar")?"rtl":"ltr",
        }}>
            
            <Place />
            <Weather />
        </div>
        <LanguageIcon onClick={()=>{
            if(localStorage.getItem("lang")===null){
                localStorage.setItem("lang","en");
            }else if(localStorage.getItem("lang")==="en"){
                localStorage.setItem("lang","ar");
            }
            else if(localStorage.getItem("lang")==="ar"){
                localStorage.setItem("lang","en");
            }
        }} className='lang' />
        </>
    )
}