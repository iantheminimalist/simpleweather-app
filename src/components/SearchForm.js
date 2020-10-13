import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import { Container, Row, Col, Input, Form, FormGroup } from 'reactstrap';
import { SearchContext } from './SearchProvider';
import { ErrorMessage } from '@hookform/error-message';

//  WeatherBit API Keys
const key1 = process.env.REACT_APP_WEATHER_API_KEY;

export const SearchForm = () => {

    const { register, errors, handleSubmit } = useForm();
    const { addSearch } = useContext(SearchContext);

    const onSubmit = async (data) => {
        const url = `https://api.weatherbit.io/v2.0/current?city=${data.City}&state=${data.State}&key=${key1}`;
        const request = await Axios.get(url);
        // console.log(request.data.data); //request data
        if(request){
            addSearch(request.data.data[0]);
        }
        else{
            console.log(
                request
            )
        }
    };


    return (
        <div className="pt-1">
            <Container>
            <div className="py-3 text-center">
                <h4>Weather Search</h4>
            </div>
                <Form onSubmit={handleSubmit(onSubmit)} >
                    <Row form>
                        <Col md={9}>
                        <FormGroup>
                            <input 
                            className="form-control" 
                            name="City" 
                            ref={register({ required: "This is required." })}
                            placeholder="City"
 
                            />
                        <ErrorMessage 
                            errors={errors}
                            name="City"
                            render={({ message }) => <p>{message}</p>}
                        />
                        </FormGroup>
                        </Col>
                        <Col md={3}>
                        <FormGroup>
                            <input 
                            className="form-control" 
                            name="State" 
                            ref={register}
                            placeholder="State" 
                            />   
                        <ErrorMessage 
                            errors={errors}
                            name="State"
                            render={({ message }) => <p>{message}</p>}
                        />     
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