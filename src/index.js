import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import * as serviceWorker from "./serviceWorker";
AOS.init();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
