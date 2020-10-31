import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { AuthContextProvider } from "./auth/Auth";

import "./styles/styles.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./app/Index";
import { history } from "./helpers/history";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer);
const apiURL = "https://carter.gg/.netlify/identity";

render(
  <Router history={history}>
    <AuthContextProvider url={apiURL}>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
