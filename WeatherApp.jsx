import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
export default function WeatherApp() {
    const[WeatherInfo,setWeatherInfo]=useState({
        city: "Hyderabad",
        feeslike: 24.84,
        temp: 25.04,
        tempMin: 25.05,
        tempMax: 25.05, 
        humidity: 47,
        weather: "haze",
    });
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Neeraj</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    );
}