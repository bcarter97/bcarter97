import React from 'react';
import { render } from 'react-dom';
import { Router } from "react-router-dom"
import { Provider } from 'react-redux';
import { IdentityContextProvider } from 'react-netlify-identity';
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

import './styles/styles.scss';
import '@fortawesome/fontawesome-free/css/all.css'
import App from './app/Index';
import { history } from "./helpers/history"
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);
const apiEndpoint = 'https://carter.gg';

render(
  <Router history={history}>
    <IdentityContextProvider url={apiEndpoint}>
      <Provider store={store}>
        <App />
      </Provider>
    </IdentityContextProvider>
  </Router>
  ,
  document.getElementById('root')
);

serviceWorker.register();
