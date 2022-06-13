import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redox-logger'

const configureStore = (preloadedState={}) => {
    return createStore(rootReducer, applyMiddleware(logger))
}

export default configureStore