import React, { useCallback } from "react";
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
  const handleChange = (e) => {

    getQuery(e.target.value)
  };
  const optMisedVersion = useCallback(debounce(handleChange), []);

  return (
    <div class="searchContainer">
      <i class="material-icons">search</i>
      <input class="searchBox" type="text"   placeholder="Search characters..." onChange={optMisedVersion} />
    </div>
  );
};

export default React.memo(Search);
