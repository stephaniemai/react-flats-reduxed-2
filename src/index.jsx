import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import '../assets/stylesheets/application.scss';
import flatReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';

import App from './components/app';

// const root = document.getElementById('root');

const reducers = combineReducers({
  flats: flatReducer,
  selectedFlat: selectedFlatReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
