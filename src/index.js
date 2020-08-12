import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { history } from './helpers';
import { rootReducer } from './reducers/rootReducer';
import { Provider } from 'react-redux';

import './App.scss';
import '@fortawesome/fontawesome-free/css/all.css'
import App from './app/Index';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
