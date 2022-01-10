import React, { useState, useEffect } from "react";
import Country from "./Country";

function Datalist(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(props.API)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountries(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log("This didn't work!");
        }
      );
  }, [props.API]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (countries.status === 404) {
    return <div>ERROR 404</div>;
  } else {
    return countries.map((country) => {
      return (
        <Country
          theme={props.theme}
          key={country.cca3 + country.ccn3}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital?.[0]}
          flag={country.flags.png}
        />
      );
    });
  }
}

export default Datalist;
