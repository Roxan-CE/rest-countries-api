import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Country(props) {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("countrydetails/" + props.name);
  }

  return (
    <div onClick={handleClick}>
      <div className="card col-sm-6 ">
        <img src={props.flag} className="flag card-img-top" alt="Flag" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            <ul>
              <li>Population: {props.population} </li>
              <li>Region: {props.region}</li>
              <li>Capital: {props.capital}</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Country;
