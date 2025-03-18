import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city,setCity]= useState("");
    let [error,setError]= useState(false);
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="b2f8b8b2506681638ed89516e8e2497e";
    
    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes=await response.json();
            let result={
                city: city.toUpperCase(),
                temp: jsonRes.main.temp,
                tempMin: jsonRes.main.temp_min,
                tempMax: jsonRes.main.temp_max,
                humidity: jsonRes.main.humidity,
                feelsLike: jsonRes.main.feels_like,
                weather: jsonRes.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    };
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };
    let handleSubmit=async(evt)=>{
        try{
            setError(false);
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch(err){
            setError(true);
        }
    };
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type='submit'>
                Search
            </Button>
            {error && <p style={{color: "red"}}>No such place in our API !</p>}
            </form>
        </div>
    );
}