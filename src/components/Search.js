import Searchbar from "./Searchbar";
import Filter from "./Filter";
import React, { useState } from "react";
import Datalist from "./Datalist";
import { DataDiv } from "./styleComponents/CardStyles/DataDiv";
import { TopContainer } from "./styleComponents/SearchBarStyles/TopContainer";
import SFcontainer from "./styleComponents/SearchBarStyles/SFcontainer";
import { SearchBarDiv } from "./styleComponents/SearchBarStyles/SearchBarDiv";
import { FilterDiv } from "./styleComponents/SearchBarStyles/FilterDiv";

function Search(props) {
  // API LOGIC

  const [apiURL, setApiUrl] = useState("https://restcountries.com/v3.1/all");

  const changeSelection = (selection) => {
    setApiUrl(selection);
  };

  return (
    <TopContainer>
      <SFcontainer>
        {" "}
        <SearchBarDiv>
          {" "}
          <Searchbar theme={props.theme} onSubmit={changeSelection} />
        </SearchBarDiv>
        <FilterDiv>
          {" "}
          <Filter theme={props.theme} onSelect={changeSelection} />
        </FilterDiv>
      </SFcontainer>
      <DataDiv>
        <Datalist theme={props.theme} API={apiURL} />
      </DataDiv>
    </TopContainer>
  );
}

export default Search;
