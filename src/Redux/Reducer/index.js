import { combineReducers } from "redux";
import SliderReducer from "./SliderReducer";
import MovieReducer from "./MovieReducer";

const rootReducers = combineReducers({
    slider: SliderReducer,
    movie: MovieReducer,
});

export default rootReducers;