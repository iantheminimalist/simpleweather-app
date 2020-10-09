import React, { createContext } from 'react'
import { usePosition } from 'use-position';

export const GetLocationContext = createContext();

export const GetLocationProvider = props => {
    const watch = true;
    
    const {
        latitude,
        longitude,
        error
      } = usePosition(watch);


console.log(error)
    return (
        <GetLocationContext.Provider value={[latitude, longitude]}>
            {props.children}
        </GetLocationContext.Provider>
        )
};
