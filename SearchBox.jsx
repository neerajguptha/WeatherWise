import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "83cf69952be56cb92e3dcc6183f0270c";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message);
            }

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like, // Corrected key
                weather: jsonResponse.weather[0].description,
            };

            console.log(result);
            return result;
        } catch (error) {
            throw err;
            setError(true);
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log("Fetching weather for:", city);

            if (!city.trim()) return; // Prevent empty search

            let info = await getWeatherInfo();
            updateInfo(info);

        } catch (error) {

        }

    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br></br> <br ></br >
                <Button variant="contained" type="submit">
                    Search
                </Button>{
                    error && <p style={{ color: "red" }}>No such place Exists!</p>
                }
            </form>
        </div>
    );
}
