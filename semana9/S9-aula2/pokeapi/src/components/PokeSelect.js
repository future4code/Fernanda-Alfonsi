import React, {useState, useEffect} from "react";
import PokeCard from "./PokeCard";
import axios from "axios"
import styled from 'styled-components'

const Seletor = styled.select`
 border:solid 5px #195aab;
 padding: 5px;
`
function PokeSelect() {

  const [pokeName,setPokeName]=useState("")
  const [pokeList,setPokeList]=useState([])

  
  useEffect(()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {setPokeList(response.data.results) })
      .catch(err => {console.log(err)});
  },[])
   



  const onChangePokemon=(event)=>{
      setPokeName(event.target.value)
  }

    return (
      <div>
        <Seletor onChange={onChangePokemon}>
          <option value={""}>nenhum</option>
          {pokeList.map((pokemon)=>{
            return( 
            <option key={pokemon.name}value={pokemon.name} > {pokemon.name}</option>
            );
          })}
         
        </Seletor>
        {pokeName && <PokeCard pokeNome={pokeName}/>}
      </div>
    );
}

export default PokeSelect;
