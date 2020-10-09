import React, {useContext} from 'react';
import { Container } from 'reactstrap';
import { SearchContext } from './SearchProvider';
import { baseUrl } from './baseUrl';

export const SearchResults = () => {
    const { weatherData } = useContext(SearchContext);
    const weatherIcon =  `/assets/icons/${weatherData[0].weather.icon}.png`;

    
    console.log(weatherData);
    return (
        <div>
         <Container>
        <img src={baseUrl + weatherIcon}  alt="img" className="weatherIcon" width="85px" height="85px"></img>
    <h4>{weatherData[0].city_name}, {weatherData[0].state_code}</h4>
        <h6>°C</h6> 
        </Container>   
        </div>
    );
}
