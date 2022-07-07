import axios from "axios";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import "./App.css";
import Chargrid from "./components/Chargrid/Chargrid";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
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
    const result = await axios
      .get(` https://rickandmortyapi.com/api/character/?name=${query}&page=${currentPage}`)
      .then(function (response) {
        console.log(response.data.results);
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
    }, 300);
  };
  window.onscroll = () => {
    console.log(window.innerHeight + document.documentElement.scrollTop, document.documentElement.offsetHeight);
    if (Math.floor(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
      setScroll(true);
      scrollToEnd();
    }
  };

  return (
    <div className="main">
      <Header />
      <div className="App">
        <Search getQuery={(q) => setQuery(q)} />
        <Chargrid item={item} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
