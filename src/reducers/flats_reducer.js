export default function(state, action) {
  // initialization
  if (state === undefined) {
    return [];
  }

  // Action #1: Populate the state with flats
  if (action.type === 'SET_FLATS') {
    return action.payload;
  } else {
    return state;
  }
}
