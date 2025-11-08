import "./index.css"
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import UserPage from "./pages/UserPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:username" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
