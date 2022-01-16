import React, { useState, useEffect } from "react";
import Country from "./Country";
import { PageButton } from "./styleComponents/CountryStyles/PageButton";
import { CenterDiv } from "./styleComponents/CountryStyles/CenterDiv";

function Pagination({ data = [], pageLimit = 0, dataLimit = 0 }) {
  const [pages, setPages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  useEffect(() => {
    setPages(Math.ceil(data.length / dataLimit));
    setCurrentPage(1);
  }, [data, dataLimit]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    // let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    // return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    let newArray = Array(pageLimit).fill();
    console.log(newArray);
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return (
    <CenterDiv>
      <CenterDiv className="dataContainer">
        {getPaginatedData().map((data, idx) => (
          <Country
            key={data.cca3 + idx}
            name={data.name.common}
            population={data.population}
            region={data.region}
            capital={data.capital?.[0]}
            flag={data.flags.png}
          />
        ))}
      </CenterDiv>

      <div className="pagination">
        {/* previous button */}
        <PageButton
          onClick={goToPreviousPage}
          disabled={currentPage === 1 ? true : false}
        >
          Prev
        </PageButton>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <PageButton
            key={index}
            onClick={changePage}
            isCurrent={`${currentPage === item ? true : false}`}
            disabled={item > pages ? true : false}
          >
            <span>{item}</span>
          </PageButton>
        ))}

        {/* next button */}
        <PageButton
          onClick={goToNextPage}
          disabled={currentPage === pages ? true : false}
        >
          Next
        </PageButton>
      </div>
    </CenterDiv>
  );
}

export default Pagination;
