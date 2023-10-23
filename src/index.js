import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

//sulla base della radice scritta su, scriviamo ciò che la renderizza, con il contenuto di <app/>
root.render(<App />);

// App è un componente react
