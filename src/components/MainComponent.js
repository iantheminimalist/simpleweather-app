import React, { Component } from 'react';
import { Container } from 'reactstrap';


import Location from './LocationComponent';




export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="content">
                    <Container>
                    <h3>SIMPLE WEATHER APP</h3>
                    <hr />
                    <Location />
                    <hr />
                    </Container>
                </div>
            </div>
        )
    }
}