import React, { Component } from 'react';
import Select, { components, DropdownIndicatorProps } from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { red } from '@mui/material/colors';
import { NoEncryption } from '@mui/icons-material';

function Filter() {
    const element = <FontAwesomeIcon icon={faChevronDown} />

      const customStyles = {
        option: (provided) => ({
          ...provided,
          border: 'none',
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
            color: "#111517"
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
      }

      const DropdownIndicator = (props
        ) => {
          return (
            <components.DropdownIndicator {...props}>
              {element}
            </components.DropdownIndicator>
          );
        };


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ];

    return <div className="filterBar shadow-sm">
        <Select closeMenuOnSelect={false}
        components={{ DropdownIndicator }}
        className="selectComponent" styles={customStyles} options={options} placeholder="Filter by Region" />
            </div>
}

export default Filter;

