import React from 'react';
import './Pagination.css';

export const Pagination = ({ pages, currentPage }) => {
  console.log(currentPage);

  return (
    <div className="pagination">
      {[...Array(pages).keys()].map((page) => (
        <a
          href={`/cars?page=${page + 1}`}
          key={page + 1}
          className={page + 1 == currentPage ? 'pagination__btn active' : 'pagination__btn'}
        >
          {page + 1}
        </a>
      ))}
    </div>
  );
};
