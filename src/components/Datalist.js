import React, { useState, useEffect } from "react";

import Pagination from "./Pagination";

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
    return (
      <div style={{ "text-align": "center", "padding-top": "80px" }}>
        <p>No results found. Please ensure the spelling is correct.</p>
      </div>
    );
  } else {
    return (
      <div>
        {countries.length > 0 ? (
          <Pagination data={countries} pageLimit={5} dataLimit={8} />
        ) : (
          <h1>No Countries to display</h1>
        )}
      </div>
    );
  }
}

export default Datalist;
