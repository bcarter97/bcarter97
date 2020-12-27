import React from "react";
import ReactDOM from "react-dom";

import App from "./app/App";
import * as serviceWorker from "./service-worker";

import "./styles.scss";
import "@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
