import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';



import Location from './testingComponents/LocationComponent';
import { CurrentWeather } from './CurrentWeather';




export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="content">
                    <Container>
                    <h3>SIMPLE WEATHER APP</h3>
                    <hr />
                    <CurrentWeather />
                    <hr />
                    </Container>
                    <Location />
                </div>
            </div>
        )
    }
}