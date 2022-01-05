import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [countryData, setCountry] = useState([]);
  const { countryid } = useParams();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + countryid + "?fullText=true")
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
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded || !countryData[0]) {
    return <div>Loading...</div>;
  } else if (countryData.status === 404) {
    return <div>ERROR 404</div>;
  } else {
    const allCurrency = Object.keys(countryData[0].currencies);
    const currencyList = allCurrency.map(
      (currency) => countryData[0].currencies[currency]
    );

    const allNames = Object.keys(countryData[0].name.nativeName);
    const currentName = allNames.map(
      (name) => countryData[0].name.nativeName[name].official
    );

    return (
      <div>
        <Header />
        <div>
          <h1>URL params is : {countryid} </h1>
          <img
            src={countryData[0].flags.svg}
            className="flag card-img-top"
            alt="Flag"
          />
          <ul>
            <li>Native name: {currentName[0]} </li>
            <li>Population: {countryData[0].population}</li>
            <li>Region: {countryData[0].region}</li>
            <li>Sub Region: {countryData[0].subregion} </li>
            <li>Capital: {countryData[0].capital?.[0]} </li>
            <li>
              Top Level Domain: {countryData[0].tld.map((item) => item + " ")}
            </li>
            <li>Currencies: {currencyList[0].name} </li>
            {/* <li>
              Languages:{countryData[0].languages.srp.map((item) => item)}{" "}
            </li> */}
          </ul>
        </div>

        <Footer />
      </div>
    );
  }
}

export default CountryDetails;
