import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import "./App.css";
import AllUserCards from "./components/AllUserCards/AllUserCards";

function App() {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchItem();
  }, [query, currentPage]);

  const fetchItem = async () => {
     await axios
      .get(` https://rickandmortyapi.com/api/character/?name=${query}&page=${currentPage}`)
      .then(function (response) {
        if (scroll) {
          setItem([...item, ...response.data.results]);
          setIsLoading(false);
        } else {
          setItem(response.data.results);
          setIsLoading(false);
        }
      })
      .catch(function (error) {
        setItem([]);
        setIsLoading(true);
      });
  };

  const scrollToEnd = () => {
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
    }, 700);
  };
  window.onscroll = () => {
    console.log(window.innerHeight + document.documentElement.scrollTop, document.documentElement.offsetHeight);
    if (Math.ceil(window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setScroll(true);
      scrollToEnd();
    }
  };

  return (
    <div className="main">
      <Header />
      <div className="App">
        <Search getQuery={useCallback((q) => setQuery(q), [query, currentPage])} />
        <AllUserCards item={item} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
