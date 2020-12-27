import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import { register } from "./serviceWorker";

import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(<App />, document.getElementById("root"));

register();
