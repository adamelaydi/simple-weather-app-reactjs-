export default function WeatherInfo(){
    return(
        <div className="weather">
                <div className="icon">
                    <CloudySnowingIcon className='weatherIcon' />
                </div>
                <div className="weatherInfo">
                    <div className="degree">
                        <div className="degreeValue">25</div>
                        <div className="degreeIcon">
                            <CloudySnowingIcon className='weatherIcon' />
                        </div>
                    </div>
                    <div className="describtion">
                        <p>broken clouds</p>
                    </div>
                    <div className="minMax">
                        <span>min: </span>
                        <span>15</span>
                        <span> | max:</span>
                        <span>30</span>
                    </div>
                </div>
            </div>
    )
}