// import flats from '../../data/flats';

export function setFlats() {
  // return {
  //   type: 'SET_FLATS',
  //   payload: flats
  // };

  return fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json())
    .then((data) => {
      return {
        type: 'SET_FLATS',
        payload: data
      };
    });
}

export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  };
}
