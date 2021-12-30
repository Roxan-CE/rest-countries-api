import "../sass/app.scss";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import Datalist from "./Datalist";

function App() {
  const [url, setUrl] = useState("https://restcountries.com/v3.1/all");

  const changeSelection = (selection) => {
    console.log("I received " + selection);
    setUrl(selection);
  };

  return (
    <div>
      <Header />
      <Searchbar onSubmit={changeSelection} />
      <Filter onSelect={changeSelection} />
      <Datalist API={url} />
      <Footer />
    </div>
  );
}

export default App;
