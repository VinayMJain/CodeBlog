import React from 'react';
// import './abc.css';

function SearchBar() {
  return (
    <div className="searchBarDiv">
      <input type="search" id="searchBar" name="searchBar" placeholder="Search Blogs" required />
      <button type="submit" className="searchButton">
        <img src="images/search.png" alt="searchButton" />
      </button>
    </div>
  );
}

export default SearchBar;
