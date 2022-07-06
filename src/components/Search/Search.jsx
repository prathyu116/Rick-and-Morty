import React from "react";
import "./Search.css";
const Search = () => {
  return (
    <div class="searchContainer">
        <i class="material-icons">search</i>
      <input class="searchBox" type="text" name="search" placeholder="Search..." />
    </div>
  );
};

export default Search;
