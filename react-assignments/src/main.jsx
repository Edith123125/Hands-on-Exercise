import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Wrap App here
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>
);
