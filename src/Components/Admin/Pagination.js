import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <a className="page-link" href="#" onClick={() => onPageChange(i)}>
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <nav className="sticky-bottom d-flex justify-content-center" aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <a className="page-link" href="#" onClick={() => onPageChange(currentPage - 1)}>
            Previous
          </a>
        </li>
        {renderPageNumbers()}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <a className="page-link" href="#" onClick={() => onPageChange(currentPage + 1)}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
