import React from 'react';
import { render } from 'react-dom';
import { Router } from "react-router-dom"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

import './styles/styles.scss';
import '@fortawesome/fontawesome-free/css/all.css'
import App from './app/Index';
import { history } from "./helpers/history"
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  ,
  document.getElementById('root')
);

serviceWorker.register();
