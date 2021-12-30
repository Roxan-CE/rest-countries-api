import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function Searchbar(props) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function handleChange(e) {
    console.log(e.target.value);
    setInput(e.target.value);
  }

  function handleSearch() {
    console.log("I searched for: " + input);
    props.onSubmit("https://restcountries.com/v3.1/name/" + input);
  }

  function handleClick() {
    console.log("I've been clicked!");
    handleSearch();
  }

  return (
    <div className="searchBar shadow-sm">
      <div className="form-group has-search">
        <span className="form-control-feedback">
          <SearchIcon onClick={handleClick} sx={{ fontSize: 42 }} />
        </span>
        <input
          type="text"
          onKeyDown={handleSubmit}
          onChange={handleChange}
          className="form-control"
          placeholder="Search for a country... "
        />
      </div>
    </div>
  );
}

export default Searchbar;
