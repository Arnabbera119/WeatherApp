import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        temp: 34,
        tempMin: 30,
        tempMax: 34,
        humidity: 20,
        feelsLike: 24,
        weather: "haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    const appStyle = {
        backgroundImage: "url('https://t3.ftcdn.net/jpg/09/48/32/12/360_F_948321220_CEq8RzYKdkPubpgfEhGIxTAXN7DgippC.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        textAlign: "center"
      };

    return(
        <div style={appStyle}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}