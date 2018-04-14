import {combineReducers} from 'redux';
import GameReducer from './game_reducer';
import SectorReducer from './sector_reducer';

const RootReducer = combineReducers({
  game: GameReducer,
  sectors: SectorReducer,
});

export default RootReducer;