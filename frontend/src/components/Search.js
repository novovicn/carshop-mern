import React, { useState } from 'react';
import './Search.css';
import { BsFilter } from 'react-icons/bs';

function Search(props) {
  const [searchBoxVisible, setSearchBoxVisible] = useState(false);

  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(keyword);
  };

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
          <div className="search__brand">
            <input
              type="text"
              name="search-brand"
              id="search-brand"
              placeholder="Brand"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <input
              type="submit"
              className="search__price--submit"
              value="Search"
            ></input>
            <i className="fas fa-search"></i>
          </div>
        </form>
      )}
    </>
  );
}

export default Search;
