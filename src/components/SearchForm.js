import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { Container, Label, Row, Col, Input, Form, FormGroup } from 'reactstrap';
import { SearchContext } from './SearchProvider';


//  WeatherBit API Keys
const key1 = process.env.REACT_APP_WEATHER_API_KEY;

export const SearchForm = () => {

    const { register, handleSubmit } = useForm();

    const { addSearch } = useContext(SearchContext);

    const [search, setSearch] = useState('');

    const onSubmit = async (data) => {
        const url = `https://api.weatherbit.io/v2.0/current?city=${data.City}&key=${key1}`;
        const request = await Axios.get(url);
        console.log(request.data.data); //request data
        setSearch(request.data.data[0]);
        console.log(search);
        addSearch(request.data.data[0]);

    };


    return (
        <div className="pt-1">
            <Container>

                    <Form onSubmit={handleSubmit(onSubmit)} >
                        <Row form>
                            <Col>
                            <FormGroup>
                                <Label>Insert:</Label>
                                <input 
                                className="form-control" 
                                name="City" 
                                //defaultValue="Testing" 
                                ref={register}
                                placeholder="Insert a City" />

                            </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col>
                            <FormGroup>
                        <Input type="submit" />
                        </FormGroup>
                            </Col>
                        </Row>

                    </Form>

            </Container>

        </div>
    )
}