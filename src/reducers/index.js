import { combineReducers } from 'redux';
import { showPokemon } from './pokemons';

const rootReducer = combineReducers({
  pokemon: showPokemon
});

export default rootReducer;
