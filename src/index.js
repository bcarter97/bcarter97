import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";

import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(<App />, document.getElementById("root"));

navigator.serviceWorker.getRegistrations().then((registrations) => {
  if (registrations.length !== 0) {
    window.location.reload(true);
  }
});
