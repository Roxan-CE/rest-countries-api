import React, { Component, useState } from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Filter(props) {
  const element = <FontAwesomeIcon icon={faChevronDown} />;

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      border: "none",
      paddingTop: 6,
      paddingBottom: 6,
      paddingRight: 20,
      paddingLeft: 48,
      fontSize: "1.5rem",
      margin: 0,
      color: state.isFocused ? props.theme.element : props.theme.text,
      backgroundColor: state.isFocused ? props.theme.text : "transparent",
    }),

    container: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      paddingTop: 32,
      paddingRight: 20,
      paddingLeft: 32,
    }),

    indicatorsContainer: (provided) => ({
      ...provided,
      width: 65,
      height: 100,
      backgroundColor: "transparent",
    }),

    control: (provided, state) => ({
      ...provided,
      width: 400,
      paddingLeft: 40,
      borderRadius: 10,
      border: 0,
      backgroundColor: props.theme.element,
      boxShadow: 0,
      "&:hover": {
        border: state.isFocused ? 0 : 0,
      },
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      // backgroundColor: "red",
      // paddingRight: 30,
      fontSize: "1.1rem",
      color: props.theme.text,
      backgroundColor: "transparent",
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: "none",
    }),

    menu: (provided) => ({
      ...provided,
      width: 400,
      top: 132,
      backgroundColor: props.theme.element,
      paddingTop: 20,
      borderRadius: 10,
    }),

    placeholder: (provided) => ({
      ...provided,
      fontSize: "1.5rem",
      color: props.theme.text,
    }),

    singleValue: (provided) => ({
      ...provided,
      //selected value
      color: props.theme.text,
    }),

    valueContainer: (provided) => ({
      ...provided,
      fontSize: "1.5rem",
      color: props.theme.text,
      backgroundColor: "transparent",
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {element}
      </components.DropdownIndicator>
    );
  };

  const options = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  const regionAPIs = [
    { name: "Africa", API: "https://restcountries.com/v3.1/region/africa" },
    { name: "America", API: "https://restcountries.com/v3.1/region/america" },
    { name: "Asia", API: "https://restcountries.com/v3.1/region/asia" },
    { name: "Europe", API: "https://restcountries.com/v3.1/region/europe" },
    { name: "Oceania", API: "https://restcountries.com/v3.1/region/oceania" },
  ];

  // console.log(Object.keys(regionAPI));

  const handleChange = (e) => {
    let selection = e.value;
    console.log("I chose: " + selection);

    let selectedRegion = regionAPIs.filter(
      (region) => region.name === selection
    );

    props.onSelect(selectedRegion[0].API);
  };

  return (
    <div className="filterBar">
      <Select
        closeMenuOnSelect={true}
        components={{ DropdownIndicator }}
        className="selectComponent "
        styles={customStyles}
        options={options}
        placeholder="Filter by Region"
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
