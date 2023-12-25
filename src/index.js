import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextsProvider from "./contexts/auth/AuthContextProvider";
import JsonServerUserContext from "./contexts/auth/JsonServerUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <JsonServerUserContext>
      <AuthContextsProvider>
        <App />
      </AuthContextsProvider>
    </JsonServerUserContext>
  </BrowserRouter>
);
