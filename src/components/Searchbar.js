import React, { useState } from "react";
import { CoverDiv } from "./styleComponents/SearchBarStyles/CoverDiv";
import { TBDiv } from "./styleComponents/SearchBarStyles/TBDiv";
import { Scover } from "./styleComponents/SearchBarStyles/Scover";
import { SubmitButton } from "./styleComponents/SearchBarStyles/SubmitButton";
import { Scircle } from "./styleComponents/SearchBarStyles/Scircle";
import { ButtonSpan } from "./styleComponents/SearchBarStyles/ButtonSpan";
import { TextInput } from "./styleComponents/SearchBarStyles/TextInput";
import { Tdiv } from "./styleComponents/SearchBarStyles/Tdiv";
import { ClearButton } from "./styleComponents/SearchBarStyles/ClearButton";

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

  function handleClear() {
    setInput("");
    props.onSubmit("https://restcountries.com/v3.1/all?");
  }

  return (
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
            value={input}
            required
          />
        </Tdiv>
        <ClearButton isNotEmpty={input} onClick={handleClear}>
          X
        </ClearButton>
      </TBDiv>
    </CoverDiv>
  );
}

export default Searchbar;
