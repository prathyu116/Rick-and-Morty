import React, { useState,useCallback } from "react";
import "./Search.css";
const Search = ({ getQuery }) => {

  const debounce = function (fn) {
    let timer;
    return function (...args) {
      let context = this;
      if(timer)  clearTimeout(timer);

      timer = setTimeout(() => {
        timer=null
        fn.apply(context,args);
      }, 500);
    };
  };
  //  let clearId;
  //  function debounce(func, delay) {
  //    if (clearId) {
  //      clearInterval(clearId);
  //    }
  //    clearId = setTimeout(() => {
  //      func();
  //    }, delay);
  //  }
  const handleChange = (e) => {

    getQuery(e.target.value)
  };
  const optMisedVersion = useCallback(debounce(handleChange), []);
  //  let clearId;
  //  function debounce(func, delay) {
  //    if (clearId) {
  //      clearInterval(clearId);
  //    }
  //    clearId = setTimeout(() => {
  //      main();
  //    }, delay);
  //  }
  return (
    <div class="searchContainer">
      <i class="material-icons">search</i>
      <input class="searchBox" type="text"   placeholder="Search characters..." onChange={optMisedVersion} />
      {/* <input class="searchBox" type="text" value={text} placeholder="Search characters..." onChange={() => debounce(getQuery, 300)} /> */}
    </div>
  );
};

export default Search;
