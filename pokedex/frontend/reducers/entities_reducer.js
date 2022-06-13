import {combineReducers} from 'react-redux';
import pokemonReducer from './pokemon_reducer';

const entitiesReducer = combineReducers({
    pokemon: pokemonReducer
})