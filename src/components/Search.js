import Searchbar from "./Searchbar";
import Filter from "./Filter";
import React, { useState } from "react";
import Datalist from "./Datalist";

function Search() {
  // API LOGIC

  const [apiURL, setApiUrl] = useState("https://restcountries.com/v3.1/all");

  const changeSelection = (selection) => {
    setApiUrl(selection);
  };

  return (
    <div>
      <Searchbar onSubmit={changeSelection} />
      <Filter onSelect={changeSelection} />
      <Datalist API={apiURL} />
    </div>
  );
}

export default Search;
