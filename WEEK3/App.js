import logo from './logo.svg';
import './App.css';
import {Pokemon} from "./Pokemon.js"
import { useState } from 'react';
import { PokeSearch } from './PokeSearch';

function App() {

  const [currentPokemon, setPokemon] = useState("tepig");
  const [currentInput, setInput] = useState("charmander")

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  function searchPokedex (event) {
    setPokemon(currentInput);
  }

  return (
    <div className="App">
      <header className="App-header">
        <PokeSearch value={currentInput} inputHandler={handleInputChange} />
        <button onClick={searchPokedex}>Search</button>
        <Pokemon name={currentPokemon} />
      </header>
    </div>
  );
}

export default App;
