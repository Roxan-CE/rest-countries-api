import "../sass/app.scss";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Filter from "./Filter";
import Country from "./Country";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);
  const [API, setAPI] = useState("");

  const changeSelection = (selection) => {
    // const selectedRegion = regionAPI.filter(
    //   (region) => region.name === selection
    // );
    // console.log("I SELECTED: " + selectedRegion);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/africa")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountries(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Header />
        <Searchbar />
        <Filter onSelect={changeSelection} />
        {countries.map((country) => {
          return (
            <Country
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital[0]}
              flag={country.flags.png}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default App;
