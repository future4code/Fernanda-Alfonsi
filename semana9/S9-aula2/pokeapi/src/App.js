import React, {useEffect, useState}from "react"
import './App.css';
import PokeSelect from './components/PokeSelect';
import Axios from "axios";


function App() {


  return (
    <div className="App">
      <PokeSelect listaDePokemons={pokeList}/>
    </div>
  );
}

export default App;
