import React, { useEffect, useState, useContext } from 'react'
import { baseUrl } from './baseUrl';
import Axios from 'axios';

import { GetLocationContext } from './GetLocation';
//  WeatherBit API Keys
    const key1 = process.env.REACT_APP_WEATHER_API_KEY;
    //  const key2 = process.env.REACT_APP_WEATHER_API_KEY2;


function RenderForecast({iconCode, foredate, id, ts }){
    const weatherIcon =  `/assets/icons/${iconCode}.png`;


    var dt = new Date(ts*1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    var options = { weekday: 'short'};
    const check = hr+ ':' + m.substr(-2) + ':' + s.substr(-2);
    let day = new Date(foredate + " " + check);
    
    const weekDay = new Intl.DateTimeFormat('en-US', options).format(day);
    
    return(
        <React.Fragment>
            <li class="list-group-item border-0" key={id} id={id}>
                <p>{weekDay}</p>
                <hr />
                <img src={baseUrl + weatherIcon} width="40px" height="40px" alt=''/>
            </li>
        </React.Fragment>
    );
}

function RenderFiveForecast({forecasts}){
    if(forecasts){
        return(
        <React.Fragment>

            <ul class="list-group list-group-horizontal text-center ">
            {forecasts.slice(0,5).map( forecast => {
                let key = 0;
                key++;
                return(
                    <RenderForecast iconCode={forecast.weather.icon} foredate={forecast.valid_date} id={key} ts={forecast.ts}/>
                )
            })}
            </ul>
        </React.Fragment>
        );
    } else {
        return <div />;
    }
}

export const FiveDayForecast = () => {

    const [latitude , longitude] = useContext(GetLocationContext);
    // console.log(latitude + longitude);
    const [ data, setData ] = useState([]);

    useEffect( () => {
    async function fetchForcast (){
        const url = `http://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&key=${key1}`;
        const request = await Axios.get(url);
        // console.log(request.data.data);
        setData(request.data.data);
    }
        fetchForcast();
    },[latitude, longitude]);

    return (
        <div>
            <RenderFiveForecast forecasts={data}/> 
        </div>
    )
}
