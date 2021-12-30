import React, { Component, useState } from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Filter(props) {
  const element = <FontAwesomeIcon icon={faChevronDown} />;

  const customStyles = {
    option: (provided) => ({
      ...provided,
      border: "none",
      //   color: state.isSelected ? 'red' : 'blue',
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 20,
      paddingLeft: 40,
      fontSize: "1.4rem",
    }),

    container: (provided) => ({
      ...provided,
    }),

    indicatorsContainer: (provided) => ({
      ...provided,
      width: 50,
      height: 100,
    }),

    control: (provided) => ({
      ...provided,
      width: 400,
      paddingLeft: 40,
      borderRadius: 10,
      border: 0,
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      // backgroundColor: "red",
      // paddingRight: 30,
      fontSize: "1.1rem",
      color: "#111517",
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: "none",
    }),

    menu: (provided) => ({
      ...provided,
      width: 400,
    }),

    placeholder: (provided) => ({
      ...provided,
      fontSize: "1.4rem",
      color: "black",
    }),

    singleValue: (provided) => ({
      ...provided,
      //selected value
    }),

    valueContainer: (provided) => ({
      ...provided,
      fontSize: "1.4rem",
      color: "black",
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
    <div className="filterBar shadow-sm">
      <Select
        closeMenuOnSelect={false}
        components={{ DropdownIndicator }}
        className="selectComponent"
        styles={customStyles}
        options={options}
        placeholder="Filter by Region"
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
