import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./Styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Contexts/Auth/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <GlobalStyle />
      <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
