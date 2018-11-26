import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";

ReactDOM.hydrate(
    <App />,
    document.getElementById("root")
);
