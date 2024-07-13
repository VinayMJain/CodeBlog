import React from 'react';
import styles from './SearchBar.module.css'
function SearchBar() {
  return (
    <div 
      className={styles.searchBarDiv} 
      id="searchBarDivId"
    >
      <input 
        id="searchBarInput" 
        name="searchBar" 
        placeholder="Search Blogs" 
        required 
        type="search" 
      />
      <button 
      className={styles.searchButton}
      id="searchButtonId"
      type="submit" 
      >
        <img 
          alt="searchButton" 
          id="searchImage"
          src="images/search.png" 
        />
      </button>
    </div>
  );
}

export default SearchBar;
