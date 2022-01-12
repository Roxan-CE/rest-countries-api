import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import countryCodes from "./countryCodes";
import {
  BorderButton,
  BorderDiv,
  CountryDiv,
  Flag,
  InfoBox,
} from "./styleComponents/CountryStyles";

function MoreInfo(props) {
  const { countryid } = useParams();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  let API =
    "https://restcountries.com/v3.1/name/" + countryid + "?fullText=true";
  const [countryData, setCountry] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountry(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log("This didn't work!");
        }
      );
  }, [countryid]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded || !countryData[0]) {
    return <div>Loading...</div>;
  } else if (countryData.status === 404) {
    return <div>ERROR 404</div>;
  } else {
    let allCurrency;
    let currencyList;
    if (countryData[0].currencies) {
      allCurrency = Object.keys(countryData[0].currencies);
      currencyList = allCurrency.map(
        (currency) => countryData[0].currencies[currency]
      );
    } else {
      currencyList = "";
    }

    const allNames = Object.keys(countryData[0].name.nativeName);
    const currentName = allNames.map(
      (name) => countryData[0].name.nativeName[name].official
    );

    const allLanguages = Object.keys(countryData[0].languages);
    const currentLanguage = allLanguages.map(
      (name) => countryData[0].languages[name]
    );

    let eachBorder;
    if (countryData[0].borders) {
      let borderCountries = countryData[0].borders;
      eachBorder = borderCountries.map((code) => {
        return countryCodes[code];
      });
    } else {
      eachBorder = "";
    }

    function handleBorderClick(e) {
      navigate("/countrydetails/" + e.target.innerHTML);
      API =
        "https://restcountries.com/v3.1/name/" +
        e.target.innerHTML +
        "?fullText=true";
    }

    return (
      <CountryDiv>
        <Flag
          style={{
            backgroundImage: `url(${countryData[0].flags.svg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Flag>

        <InfoBox>
          <h1>{countryid}</h1>
          <div>
            <p>
              <span>Native Name:</span> {currentName[0]}{" "}
            </p>
            <p>
              <span>Population:</span>{" "}
              {countryData[0].population.toLocaleString()}
            </p>
            <p>
              <span>Region:</span> {countryData[0].region}
            </p>
            <p>
              <span>Sub Region:</span> {countryData[0].subregion}{" "}
            </p>
            <p>
              <span>Capital:</span> {countryData[0].capital?.[0]}{" "}
            </p>
          </div>
          <div>
            <p>
              <span>Top Level Domain:</span>
              {countryData[0].tld.map((item) => item + " ")}
            </p>
            <p>
              <span>Currencies:</span> {currencyList[0]?.name}{" "}
            </p>
            <p>
              <span>Languages:</span>{" "}
              {allCurrency && currentLanguage.join(", ")}
            </p>
          </div>
          <h2>Border Countries:</h2>
          <BorderDiv>
            {countryData[0].borders &&
              eachBorder.map((border) => {
                return (
                  <BorderButton onClick={handleBorderClick}>
                    {border}
                  </BorderButton>
                );
              })}{" "}
          </BorderDiv>
        </InfoBox>
      </CountryDiv>
    );
  }
}

export default MoreInfo;
