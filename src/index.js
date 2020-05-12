import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from "./helpers";

import "./App.sass";
import 'font-awesome/css/font-awesome.min.css'
import App from './app/Index';
import * as serviceWorker from './serviceWorker';

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
