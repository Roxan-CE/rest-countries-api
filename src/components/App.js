import "../sass/app.scss";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import Datalist from "./Datalist";

function App() {
  const [apiURL, setApiUrl] = useState("https://restcountries.com/v3.1/all");

  const changeSelection = (selection) => {
    console.log("I received " + selection);
    setApiUrl(selection);
  };

  return (
    <div>
      <Header />
      <Searchbar onSubmit={changeSelection} />
      <Filter onSelect={changeSelection} />
      <Datalist API={apiURL} />
      <Footer />
    </div>
  );
}

export default App;
