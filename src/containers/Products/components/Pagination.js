import React from 'react';
import '../style.css';

const Pagination = ({ prodsPerPage, totalProds, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProds / prodsPerPage); i++) {
      console.log('alo????');
    pageNumbers.push(i);
  }

  console.log(pageNumbers, prodsPerPage, totalProds,Math.ceil(totalProds / prodsPerPage), 'page numbers');

  return (
    <div class="pagination">
            {pageNumbers.map(number => (
                <div onClick={() => paginate(number)} href='#' className={currentPage === number ? 'active' : null }>
                {number}
                </div>
            ))}
    </div>
  );
};

export default Pagination;