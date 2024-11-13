import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import FetchData from "./context/FetchData";

ReactDOM.render( <FetchData children={<App />}/> , document.getElementById("root"));
