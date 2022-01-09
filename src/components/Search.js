import Searchbar from "./Searchbar";
import Filter from "./Filter";
import React, { useState } from "react";
import Datalist from "./Datalist";

function Search(props) {
  // API LOGIC

  const [apiURL, setApiUrl] = useState("https://restcountries.com/v3.1/all");

  const changeSelection = (selection) => {
    setApiUrl(selection);
  };

  return (
    <div>
      <Searchbar theme={props.theme} onSubmit={changeSelection} />
      <Filter theme={props.theme} onSelect={changeSelection} />
      <Datalist theme={props.theme} API={apiURL} />
    </div>
  );
}

export default Search;
