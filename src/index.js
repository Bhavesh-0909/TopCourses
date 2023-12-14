import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import toastr from "toastr";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <toastr/>
  </>

  
);
