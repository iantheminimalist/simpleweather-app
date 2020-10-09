import React, { createContext, useReducer } from 'react';
import SearchReducer from './SearchReducer';

const initialState = {
    weatherData : [
        {   city_name: "San Diego", 
            temp: '96.4', 
            state_code: 'CA', 
            weather: {
                icon: "c04n", 
                code: 804, 
                description: "Overcast clouds"
            }
        }
    ]
};

export const SearchContext = createContext(initialState);

export const SearchProvider = props => {
 const [state, dispatch] = useReducer(SearchReducer, initialState);
    
    //actions
    function addSearch(weatherData){
        dispatch({
            type: 'ADD_SEARCH',
            payload: weatherData
        });
    }
    return (
        <SearchContext.Provider value={{
            weatherData: state.weatherData,
            addSearch
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}
