import React , { useState, useEffect } from 'react';

import { Row , Col, Container } from 'reactstrap';
import { baseUrl } from './baseUrl';
const axios = require('axios');




//`https://api.weatherbit.io/v2.0/current&key=${key}&lat=38.123&lon=-78.543`
const key = process.env.REACT_APP_WEATHER_API_KEY2;

const url = `https://api.weatherbit.io/v2.0/current?&lat=32.6732763&lon=-117.11469799999999&key=${key}`;


export const CurrentWeather = () => {
    const [ data , setData ] = useState( [] );
    const [weather, setWeatherIcon ] = useState( '' );


    useEffect( () => {
        let isCancelled = false;

        async function fetchWeather (){

                const request = await axios.get(url);
                console.log(request.data.data);
                setData(request.data.data[0]);
                setWeatherIcon(request.data.data[0].weather);
                console.log(data);
                console.log(weather);
                //return request;
                console.log("isCanceled" + isCancelled);

        };
        fetchWeather();
        console.log(data);
    }, []);
    const weatherIcon =  `/assets/icons/${weather.icon}.png`;
    console.log(weatherIcon);

//data


/*
    axios.get(url)
    .then(resp => {
        console.log(resp.data);
    }).catch(error => console.log(error))

*/
console.log(weatherIcon);
    return ( 
        <div>

            <Row>
            <Col md="4">
                <img src={baseUrl + weatherIcon} width="50px" height="50px" alt=''/>
                <p>{weather.description}</p>
            </Col>
            <Col md="8">
            {data.city_name}
            </Col>
        </Row>


        </div>
    )
};