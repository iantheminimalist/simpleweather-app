import React from 'react';
import { Container} from 'reactstrap';
import { SearchForm } from './SearchForm';

import { SearchProvider } from './SearchProvider';
import { SearchResults } from './SearchResults';



export const SearchWeather = () => {


    return (
        <div className="py-4">
            <SearchProvider>
            <Container>
                <SearchResults />

                <SearchForm />
            </Container>
            </SearchProvider>


        </div>
    )
}


