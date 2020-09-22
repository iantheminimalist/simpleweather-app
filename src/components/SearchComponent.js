import React, { useState, } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { Container, Label, Row, Col, Input, Form, FormGroup } from 'reactstrap';


//  WeatherBit API Keys
const key1 = process.env.REACT_APP_WEATHER_API_KEY;

export const SearchForm = () => {

    const { register, handleSubmit } = useForm();
    const [search, setSearch] = useState('');

    const onSubmit = async (data) => {
        const url = `https://api.weatherbit.io/v2.0/current?city=${data.City}&key=${key1}`;
        const request = await Axios.get(url);
        console.log(request.data.data); 
        setSearch(request.data.data[0].city_name);
        console.log("setting search: " + search);
    };


    return (
        <div className="pt-1">
            <Container>

                    <Form onSubmit={handleSubmit(onSubmit)} >
                        <Row form>
                            <Col>
                            <FormGroup>
                                <Label>Insert:</Label><br />
                                <input 
                                className="form-control" 
                                name="City" 
                                //defaultValue="Testing" 
                                ref={register}
                                placeholder="Insert a City" /><br />

                            </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                        <Input type="submit" />
                        </FormGroup>
                    </Form>

            </Container>

        </div>
    )
}