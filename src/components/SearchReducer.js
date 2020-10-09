export default (state , action ) => {
    switch(action.type){
        case 'ADD_SEARCH':
        return{
            ...state,
            weatherData: [action.payload, state.weatherData ]
        }
        default:
            return state;
    }
} 