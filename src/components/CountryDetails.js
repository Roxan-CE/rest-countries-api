import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams, useNavigate } from "react-router-dom";
import countryCodes from "./countryCodes";

function CountryDetails() {
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
      <div>
        <Header />
        <div>
          <button
            onClick={() => {
              navigate(-1);
              API = "https://restcountries.com/v3.1/name/" + countryid;
            }}
          >
            go back
          </button>
          <h1>{countryid}</h1>
          <img
            src={countryData[0].flags.svg}
            className="flag card-img-top"
            alt="Flag"
          />
          <ul>
            <li>Native name: {currentName[0]} </li>
            <li>Population: {countryData[0].population.toLocaleString()}</li>
            <li>Region: {countryData[0].region}</li>
            <li>Sub Region: {countryData[0].subregion} </li>
            <li>Capital: {countryData[0].capital?.[0]} </li>
            <li>
              Top Level Domain: {countryData[0].tld.map((item) => item + " ")}
            </li>
            <li>Currencies: {currencyList[0]?.name} </li>
            <li>Languages: {allCurrency && currentLanguage.join(", ")}</li>
            <li>
              Border Countries:
              {countryData[0].borders &&
                eachBorder.map((border) => {
                  return <button onClick={handleBorderClick}>{border}</button>;
                })}{" "}
            </li>
          </ul>
        </div>

        <Footer />
      </div>
    );
  }
}

export default CountryDetails;
