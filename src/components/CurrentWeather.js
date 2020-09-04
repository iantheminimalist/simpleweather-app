import React , { useState, useEffect } from 'react';
const axios = require('axios');

//`https://api.weatherbit.io/v2.0/current&key=${key}&lat=38.123&lon=-78.543`
const key = process.env.REACT_APP_WEATHER_API_KEY2;
const url=`https://api.weatherbit.io/v2.0/current?&lat=32.6732763&lon=-117.11469799999999&key=${key}`;
    

export const CurrentWeather = () => {
    const [ data , setData ] = useState([]);
    console.log(key); 

    useEffect( () => {
        let isCancelled = false;
        async function fetchWeather (){
            const request = await axios.get(url);
            console.log(request.data.data.length);
            setData(request.data.data[0])
            //return request;
        };
        fetchWeather();

        return () => {
            isCancelled = true;
          };
    },[]);
console.log(data.city_name);

//data


/*
    axios.get(url)
    .then(resp => {
        console.log(resp.data);
    }).catch(error => console.log(error))

*/

    return (
        <div>
    <ul>
    {data.city_name}
    </ul>
        </div>
    )
};