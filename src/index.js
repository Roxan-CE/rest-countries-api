import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="countrydetails/:countryid" element={<CountryDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
