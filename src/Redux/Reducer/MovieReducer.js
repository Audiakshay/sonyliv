const initState = {};

const MovieReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case 'selectedMovie':
            return payload;
    
        default:
            return state;
    }
};

export default MovieReducer;

