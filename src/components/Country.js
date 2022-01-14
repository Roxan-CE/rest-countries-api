import React from "react";
import { useNavigate } from "react-router-dom";
import { CardBody } from "./styleComponents/CardStyles/CardBody";
import { ContainerDiv } from "./styleComponents/CardStyles/ContainerDiv";
import { StyledCard } from "./styleComponents/CardStyles/StyledCard";
import { StyledImg } from "./styleComponents/CardStyles/StyledImg";

function Country(props) {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("countrydetails/" + props.name);
  }

  return (
    <ContainerDiv className="col-sm-12 col-md-4 col-lg-2" onClick={handleClick}>
      <StyledCard>
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
