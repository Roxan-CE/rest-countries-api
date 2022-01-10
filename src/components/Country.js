import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerDiv,
  StyledCard,
  StyledImg,
  CardBody,
} from "./styleComponents/CardStyles";

function Country(props) {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("countrydetails/" + props.name);
  }

  return (
    <ContainerDiv className="container shadow-sm" onClick={handleClick}>
      <StyledCard className="col-sm-12">
        <StyledImg src={props.flag} className="flag card-img-top" alt="Flag" />
        <CardBody className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            <ul>
              <li>
                <span>Population:</span> {props.population.toLocaleString()}{" "}
              </li>
              <li>
                <span>Region:</span> {props.region}
              </li>
              <li>
                <span>Capital: </span>
                {props.capital}
              </li>
            </ul>
          </p>
        </CardBody>
      </StyledCard>
    </ContainerDiv>
  );
}

export default Country;
