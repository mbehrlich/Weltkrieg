import {merge} from 'lodash';

const defaultState = {
  turn: 0,
  player: 0,
};

const players = [
  "Germany",
]

const GameReducer = (state = defaultState, action) => {
  let newState;
  switch (action.type) {
    case "END_TURN":
      newState = merge({}, state);
      if (players.length === state.player + 1) {
        newState.turn++;
        newState.player = 0;
      } else {
        newState.player++;
      }
      return newState;
    default:
      return state;
  }
};

export default GameReducer;