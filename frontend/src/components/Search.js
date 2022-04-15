import React from "react";
import './Search.css';

function Search() {

  return (
    <div className="search">
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
        />
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}


export default Search;
