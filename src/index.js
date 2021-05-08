import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/styles.scss";
import "./vendors/firebase";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
