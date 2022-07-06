import axios from 'axios';
import { useEffect, useState } from 'react';
import "./App.css"
import Chargrid from './components/Chargrid/Chargrid';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
function App() {
   const [item, setItem] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [query, setQuery] = useState("");
   useEffect(() => {
     const fetchItem = async () => {
       const result = await axios(` https://rickandmortyapi.com/api/character/?name=rick&page=1`);
       console.log(result.data.results);
       setItem(result.data.results);
       setIsLoading(false);
     };
     fetchItem();
   }, [query]);

  return (
    <div className="main">
      <Header />
      <div className="App">
        <Search />
        <Chargrid item={item} />
      </div>
    </div>
  );
}

export default App;
