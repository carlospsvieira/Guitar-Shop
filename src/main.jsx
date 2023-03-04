import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AddProvider from "./context/AddProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AddProvider>
      <App />
    </AddProvider>
  </BrowserRouter>
);
