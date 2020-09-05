import React , { useState, useEffect } from 'react';
import { Camera, CloudDrizzle } from 'react-feather';
import { Row , Col } from 'reactstrap';

const axios = require('axios');




//`https://api.weatherbit.io/v2.0/current&key=${key}&lat=38.123&lon=-78.543`
const key = process.env.REACT_APP_WEATHER_API_KEY2;
const url=`https://api.weatherbit.io/v2.0/current?&lat=32.6732763&lon=-117.11469799999999&key=${key}`;
    

export const CurrentWeather = () => {
    const [ data , setData ] = useState( [] );
    console.log(key); 

    useEffect( () => {
        let isCancelled = false;

        async function fetchWeather (){
        try{
            if (!isCancelled){
                const request = await axios.get(url);
                console.log(request.data.data);
                setData(request.data.data[0].weather);
                console.log(data)
                //return request;
                console.log("isCanceled" + isCancelled);
            }
        }catch(error){
            console.log(error);

        }

        };
        fetchWeather();
        console.log("isCanceled" + isCancelled)

          console.log("isCanceled2" + isCancelled);

    },[]);


//data


/*
    axios.get(url)
    .then(resp => {
        console.log(resp.data);
    }).catch(error => console.log(error))

*/
    return ( 
        <div>
        <Row>
            <Col md="4">
                {data.icon}
            </Col>
            <Col md="8">
                <p>City, State</p>
            </Col>
        </Row>
        </div>
    )
};