import React, { useEffect, useState } from 'react'
import Axios from 'axios';


//  WeatherBit API Keys
//  const key = process.env.REACT_APP_WEATHER_API_KEY2;
const key2 = process.env.REACT_APP_WEATHER_API_KEY2;

export const FiveDayForecast = (props) => {
    const [ data, setData ] = useState([]);

    useEffect( () => {
    async function fetchForcast (){
        const url = `http://api.weatherbit.io/v2.0/forecast/daily?&lat=${props.lat}&lon=${props.long}&key=${key2}`;
        const request = await Axios.get(url);
        
        console.log(request.data.data);
        setData(request.data.data);

    }


        fetchForcast();
        },[props]);

    return (
        <div>
            {data.slice(0,5).map( forecast => {
                return(
                    console.log(forecast.weather.icon)
                )
            })}
        </div>
    )
}
