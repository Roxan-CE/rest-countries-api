import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  CoverDiv,
  FormInput,
  TBDiv,
  Scover,
  SubmitButton,
  Scircle,
  Tdiv,
  TextInput,
  ButtonSpan,
} from "./styleComponents/SearchbarStyles";

function Searchbar(props) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    console.log(e.key);
    if (e.key === "Enter" && input) {
      handleSearch();
    }
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSearch() {
    console.log("I searched for: " + input);
    props.onSubmit("https://restcountries.com/v3.1/name/" + input);
  }

  function handleClick() {
    if (input) {
      handleSearch();
    }
  }

  return (
    // <div className="searchBar shadow-sm">
    //   <div className="form-group has-search">
    //     <span className="form-control-feedback">
    //       <SearchIcon onClick={handleClick} sx={{ fontSize: 42 }} />
    //     </span>
    //     <input
    //       type="text"
    //       onKeyDown={handleSubmit}
    //       onChange={handleChange}
    //       className="form-control"
    //       placeholder="Search for a country... "
    //       required
    //     />
    //   </div>
    // </div>

    <CoverDiv>
      <TBDiv>
        <Scover>
          <SubmitButton onClick={handleClick} type="submit">
            <Scircle></Scircle>
            <ButtonSpan></ButtonSpan>
          </SubmitButton>
        </Scover>
        <Tdiv>
          <TextInput
            type="text"
            onKeyDown={handleSubmit}
            onChange={handleChange}
            placeholder="Search for a country... "
            required
          />
        </Tdiv>
      </TBDiv>
    </CoverDiv>
  );
}

export default Searchbar;
