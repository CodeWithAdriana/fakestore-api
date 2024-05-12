//Borrar=esto es lo que llama el muchacho como pagination
import React from "react";

export const LandingPage = ({
  productsPerPage,
  totalProducts,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPreviusPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            className={`page-link ${currentPage === 1 ? "is-disabled" : ""}`}
            href="#"
            aria-label="Previous"
            onClick={onPreviusPage}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers.map((noPage) => (
          <li key={noPage}>
            <a
              className={`page-link ${
                noPage === currentPage ? "is-current" : ""
              }`}
              onClick={() => onSpecificPage(noPage)}
            >
              {noPage}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className={`page-link ${
              currentPage >= pageNumbers.length ? "is-disabled" : ""
            }`}
            href="#"
            onClick={onNextPage}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
