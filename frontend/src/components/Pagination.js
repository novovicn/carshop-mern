import React from 'react';
import './Pagination.css';
import { Link } from 'react-router-dom';
export const Pagination = ({ pages, currentPage }) => {
  console.log(currentPage);

  return (
    <div className="pagination">
      {[...Array(pages).keys()].map((page) => (
        <Link
          to={`/cars?page=${page + 1}`}
          key={page + 1}
          className={
            page + 1 == currentPage
              ? 'pagination__btn active'
              : 'pagination__btn'
          }
        >
          {page + 1}
        </Link>
      ))}
    </div>
  );
};
