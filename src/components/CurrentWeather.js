import React , { useState, useEffect } from 'react';

import { Row , Col } from 'reactstrap';
import { baseUrl } from './baseUrl';


const axios = require('axios');

//  WeatherBit API Keys
  const key1 = process.env.REACT_APP_WEATHER_API_KEY2;
    //const key2 = process.env.REACT_APP_WEATHER_API_KEY2;

export const CurrentWeather = (props) => {
    //console.log(props);

    const [ data , setData ] = useState( [] ); // grab weather data
    const [weather, setWeatherIcon ] = useState( '' ); // grab weather code
    var today = new Date();
    var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    

    useEffect( () => {

    async function fetchWeather (){
        const url = `https://api.weatherbit.io/v2.0/current?&lat=${props.lat}&lon=${props.long}&key=${key1}`;
            const request = await axios.get(url);
            console.log(request.data.data);
            setData(request.data.data[0]);
            setWeatherIcon(request.data.data[0].weather);
            //return request;
    }
    fetchWeather();

    }, [props]);
     
    const weatherIcon =  `/assets/icons/${weather.icon}.png`;
    return ( 
        <div className="pt-4">

            <Row>
            <Col md="5" className=" text-center ">
                <img src={baseUrl + weatherIcon} className="weatherIcon" width="85px" height="85px" alt=''/> <br />
                <p>{weather.description}</p>

            </Col>
            <Col md="7" className="text-md-left text-center">
                <h2>{data.city_name}, {data.state_code}</h2>
                <h4>{data.temp}°C</h4>
                <h4>{time}</h4>
            </Col>
        </Row>


        </div>
    )
};