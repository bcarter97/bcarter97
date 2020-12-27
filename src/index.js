import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";

import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.css";

import { register } from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

register();
