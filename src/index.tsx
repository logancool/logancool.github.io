import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import './style/application.scss';

const container = document.getElementById("app");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App />);
