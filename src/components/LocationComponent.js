import React from 'react';
import { usePosition } from 'use-position';
import { CurrentWeather } from './CurrentWeather';
import { FiveDayForecast } from './FiveDayForecast';

//import { CurrentWeather } from './CurrentWeather';

 const Location = () => {
    const {
        latitude,
        longitude
      } = usePosition();


 
    return (
        <div>
          <CurrentWeather lat={latitude} long={longitude} />
          <hr />
          <FiveDayForecast lat={latitude} long={longitude} />
        </div>
    )
}

export default Location;