import {combineReducers} from 'redux';
import GameReducer from './game_reducer';

const RootReducer = combineReducers({
  game: GameReducer,
});

export default RootReducer;