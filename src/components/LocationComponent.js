import React from 'react';
import { CurrentWeather } from './CurrentWeather';
import { FiveDayForecast } from './FiveDayForecast';
import { GetLocationProvider } from './GetLocation';


 const Location = () => {

    return (
      <GetLocationProvider>
        <div>
          <CurrentWeather />
          <hr />
          <FiveDayForecast />
        </div>
      </GetLocationProvider>

    )
}

export default Location;