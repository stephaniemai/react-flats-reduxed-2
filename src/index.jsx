import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// Internal modules
import '../assets/stylesheets/application.scss';
import App from './components/app';

// Reducers
import flatReducer from './reducers/flats_reducer';
import selectedFlatReducer from './reducers/selected_flat_reducer';

const reducers = combineReducers({
  flats: flatReducer,
  selectedFlat: selectedFlatReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
