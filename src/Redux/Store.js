import {applyMiddleware, compose, createStore} from 'redux';
import rootReducers from './Reducer';
import thunk from 'redux-thunk';

const Compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers, Compose(applyMiddleware(thunk)));

export default store;