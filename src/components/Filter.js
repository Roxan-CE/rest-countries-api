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
      fontSize: "1.2rem",
      margin: 0,
      color: state.isFocused ? props.theme.element : props.theme.text,
      backgroundColor: state.isFocused ? props.theme.text : "transparent",
      "&:hover": {
        cursor: "pointer",
      },

      "@media only screen and (min-width: 750px)": {
        ...provided,
        fontSize: "1.5rem",
        color: state.isFocused ? props.theme.element : props.theme.text,
        backgroundColor: state.isFocused ? props.theme.text : "transparent",
      },

      "@media only screen and (min-width: 1024px)": {
        ...provided,
        fontSize: "1.1rem",
        color: state.isFocused ? props.theme.element : props.theme.text,
        backgroundColor: state.isFocused ? props.theme.text : "transparent",
      },

      "@media only screen and (min-width: 1440px)": {
        ...provided,
        fontSize: "0.90rem",
        color: state.isFocused ? props.theme.element : props.theme.text,
        backgroundColor: state.isFocused ? props.theme.text : "transparent",
      },
    }),

    container: (provided) => ({
      ...provided,
      backgroundColor: "transparent",
      paddingTop: 0,
      paddingRight: 0,
      paddingLeft: 0,
      "@media only screen and (min-width: 750px)": {
        ...provided,
        paddingTop: 30,
        paddingRight: 20,
        paddingLeft: "5%",
        backgroundColor: "transparent",
      },

      "@media only screen and (min-width: 1024px)": {
        ...provided,
        paddingTop: 55,
        paddingRight: 0,
        paddingLeft: "20%",
        backgroundColor: "transparent",
      },
      "@media only screen and (min-width: 1440px)": {
        ...provided,
        paddingTop: 48,
        paddingRight: 0,
        paddingLeft: "35%",
        backgroundColor: "transparent",
      },
    }),

    indicatorsContainer: (provided) => ({
      ...provided,
      width: 60,
      height: 74,
      backgroundColor: "transparent",
      cursor: "pointer",

      "@media only screen and (min-width: 750px)": {
        ...provided,
        width: 65,
        height: 100,
        backgroundColor: "transparent",
      },
      "@media only screen and (min-width: 1024px)": {
        ...provided,
        width: 65,
        height: 70,
        backgroundColor: "transparent",
      },
      "@media only screen and (min-width: 1440px)": {
        ...provided,
        width: 40,
        height: 56,
        backgroundColor: "transparent",
      },
    }),

    control: (provided, state) => ({
      ...provided,
      width: 265,
      paddingLeft: 20,
      borderRadius: 10,
      border: 0,
      backgroundColor: "transparent",
      boxShadow: "0 5px 20px rgb(0 0 0 / 8%), 0 0 0 10px transparent",
      margin: "0 auto",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        backgroundColor: props.theme.element,
        cursor: "pointer",
      },

      "@media only screen and (min-width: 750px)": {
        ...provided,
        width: 400,
        paddingLeft: 40,
        borderRadius: 10,
        backgroundColor: props.theme.element,
        border: 0,
        boxShadow: 0,
        margin: 0,
        "&:hover": {
          border: state.isFocused ? 0 : 0,
          backgroundColor: props.theme.element,
        },
      },

      "@media only screen and (min-width: 1024px)": {
        ...provided,
        width: 300,
        paddingLeft: 40,
        borderRadius: 10,
        backgroundColor: props.theme.element,
        border: 0,
        boxShadow: 0,
        margin: 0,
        "&:hover": {
          border: state.isFocused ? 0 : 0,
          backgroundColor: props.theme.element,
        },
      },

      "@media only screen and (min-width: 1440px)": {
        ...provided,
        width: 205,
        paddingLeft: 15,
        borderRadius: 10,
        backgroundColor: props.theme.element,
        border: 0,
        boxShadow: 0,
        margin: 0,
        "&:hover": {
          border: state.isFocused ? 0 : 0,
          backgroundColor: props.theme.element,
        },
      },
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      fontSize: "1rem",
      color: props.theme.text,
      backgroundColor: "transparent",

      "@media only screen and (min-width: 750px)": {
        ...provided,
        fontSize: "1.1rem",
        color: props.theme.text,
      },
      "@media only screen and (min-width: 1024px)": {
        ...provided,
        fontSize: "1rem",
        color: props.theme.text,
      },
      "@media only screen and (min-width: 1440px)": {
        ...provided,
        fontSize: "0.7rem",
        color: props.theme.text,
      },
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: "none",
    }),

    menu: (provided) => ({
      ...provided,
      width: 265,
      top: 85,
      backgroundColor: props.theme.element,
      paddingTop: 20,
      paddingBottom: 20,
      borderRadius: 10,
      margin: "0 auto",
      left: 55,

      "@media only screen and (min-width: 750px)": {
        ...provided,
        width: 400,
        backgroundColor: props.theme.element,
        top: 132,
        left: 38,
        borderRadius: 10,
      },
      "@media only screen and (min-width: 1024px)": {
        ...provided,
        width: 300,
        backgroundColor: props.theme.element,
        top: 124,
        left: 62,
        borderRadius: 10,
      },

      "@media only screen and (min-width: 1440px)": {
        ...provided,
        width: 205,
        backgroundColor: props.theme.element,
        top: 102,
        left: 152,
        borderRadius: 10,
      },
    }),

    placeholder: (provided) => ({
      ...provided,
      fontSize: "1.1rem",
      color: props.theme.text,

      "@media only screen and (min-width: 750px)": {
        ...provided,
        fontSize: "1.5rem",
        color: props.theme.text,
      },
      "@media only screen and (min-width: 1024px)": {
        ...provided,
        fontSize: "1.15rem",
        color: props.theme.text,
      },
      "@media only screen and (min-width: 1440px)": {
        ...provided,
        fontSize: "0.90rem",
        color: props.theme.text,
      },
    }),

    singleValue: (provided) => ({
      ...provided,
      //selected value
      color: props.theme.text,
    }),

    valueContainer: (provided) => ({
      ...provided,
      fontSize: "1.15rem",
      color: props.theme.text,
      backgroundColor: "transparent",

      "@media only screen and (min-width: 750px)": {
        ...provided,
        fontSize: "1.5rem",
        color: props.theme.text,
        backgroundColor: "transparent",
      },
      "@media only screen and (min-width: 1024px)": {
        ...provided,
        fontSize: "1.15rem",
        color: props.theme.text,
        backgroundColor: "transparent",
      },
      "@media only screen and (min-width: 1440px)": {
        ...provided,
        fontSize: "0.90rem",
        color: props.theme.text,
        backgroundColor: "transparent",
      },
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
        // menuIsOpen={true}
      />
    </div>
  );
}

export default Filter;
