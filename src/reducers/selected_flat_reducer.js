import { SELECT_FLAT } from '../actions';

export default function(state, action) {
  // initialization
  if (state === undefined) {
    return null;
  }
  // Action #1: Populate the state with flats
  if (action.type === SELECT_FLAT) {
    return action.payload;
  } else {
    return state;
  }
}
