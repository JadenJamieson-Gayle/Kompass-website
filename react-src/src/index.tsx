import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const root = document.getElementById("root");
if (root !== null) {
  createRoot(root).render(<App />);
} else {
  console.error("Root element not found");
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
