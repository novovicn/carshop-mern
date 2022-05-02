import React, { useState } from 'react';
import './Search.css';
import { BsFilter } from 'react-icons/bs';

function Search(props) {
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);

  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(keyword);
  }

  return (
    <>
      <div
        className="filterIcon"
        onClick={(e) => setSearchBoxVisible(!searchBoxVisible)}
      >
        <BsFilter size="40px" />
      </div>
      {searchBoxVisible && (
        <form className="search" onSubmit={handleSubmit}>
          <div className="search__price">
            <label htmlFor="search__price--lowest">Price </label>
            <input
              type="number"
              name="search__price--lowest"
              className="search__price--lowest"
              placeholder="from"
            />
            <input
              type="number"
              name="search__price--highest"
              className="search__price--highest"
              placeholder="to"
            />
            <input
              type="submit"
              className="search__price--submit"
              value="Search"
            ></input>
          </div>
          <div className="search__brand">
            <input
              type="text"
              name="search-brand"
              id="search-brand"
              placeholder="Brand and model"
              onChange={e => setKeyword(e.target.value)}
            />
            <i className="fas fa-search"></i>
          </div>
        </form>
      )}
    </>
  );
}

export default Search;
