import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import AddProvider from "./context/AddProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AddProvider>
      <App />
    </AddProvider>
  </HashRouter>
);
