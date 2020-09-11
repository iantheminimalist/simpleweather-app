import React , { useState, useEffect } from 'react';

import { Row , Col } from 'reactstrap';
import { baseUrl } from './baseUrl';


const axios = require('axios');

//  WeatherBit API Keys
//  const key = process.env.REACT_APP_WEATHER_API_KEY2;
    const key2 = process.env.REACT_APP_WEATHER_API_KEY2;
    
export const CurrentWeather = (props) => {
    //console.log(props);

    const [ data , setData ] = useState( [] ); // grab weather data
    const [weather, setWeatherIcon ] = useState( '' ); // grab weather code


    useEffect( () => {

    async function fetchWeather (){
        const url = `https://api.weatherbit.io/v2.0/current?&lat=${props.lat}&lon=${props.long}&key=${key2}`;
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
        <div>

            <Row>
            <Col md="5" className=" text-center">
                <img src={baseUrl + weatherIcon} width="75px" height="75px" alt=''/> <br />
                <p>{weather.description}</p>

            </Col>
            <Col md="7" className="text-md-left text-center">
                <h2>{data.city_name}, {data.state_code}</h2>
                <h3>{data.temp}°C</h3>
            </Col>
        </Row>


        </div>
    )
};