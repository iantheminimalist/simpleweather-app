import React , { useState, useEffect } from 'react';
const axios = require('axios');

//`https://api.weatherbit.io/v2.0/current&key=${key}&lat=38.123&lon=-78.543`


export const CurrentWeather = () => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const url=`https://api.weatherbit.io/v2.0/current?&lat=32.6732763&lon=-117.11469799999999&key=${key}`;

    console.log(key); 


    axios.get(url)
    .then(resp => {
        console.log(resp);
    }).catch(error => console.log(error))



    return (
        <div>
    <ul>

    </ul>
        </div>
    )
};