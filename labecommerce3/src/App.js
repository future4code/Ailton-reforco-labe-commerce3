import logo from './logo.svg';
import './App.css';
import Filtros from './components/Filtros';
import { useState } from 'react';

function App() {

  const [query, setQuery] = useState("")
  const [minPrice, setMinPrice] = useState (-Infinity)
  const [maxPrice, setMaxnPrice] = useState (Infinity)
  

  return (
    <div>
      <Filtros
      query={query}
      setQuery={setQuery}
      minPrice = {minPrice}
      setMinPrice = {setMinPrice}
      maxPrice = {maxPrice}
      setMaxnPrice = {setMaxnPrice}/>
    </div>
  );
}

export default App;
