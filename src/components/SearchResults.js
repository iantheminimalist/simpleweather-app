import React, {useContext} from 'react';
import { Col, Container, Row } from 'reactstrap';
import { SearchContext } from './SearchProvider';
import { baseUrl } from './baseUrl';

export const SearchResults = () => {
    const { weatherData } = useContext(SearchContext);
    const weatherIcon =  `/assets/icons/${weatherData[0].weather.icon}.png`;

    
    console.log(weatherData);
    return (
        <div className="py-4">
         <Container>
             <Row>
                 <Col md="5" className="text-center">
                 <img src={baseUrl + weatherIcon}  alt="img" className="weatherIcon" width="85px" height="85px"></img>
                 <p>{weatherData[0].weather.description}</p>
                 </Col>
                <Col md="7" className="text-md-left text-center">
                <h4>{weatherData[0].city_name}, {weatherData[0].state_code}</h4>
            <h6>{weatherData[0].temp}°C</h6> 
                </Col>
             </Row>


        </Container>   
        </div>
    );
}
