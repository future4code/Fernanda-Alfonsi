import React, { useEffect, useState } from "react"
import axios from "axios"
import styled from 'styled-components'

const PokeImg = styled.img`
  width:150px;
`
const Nomes = styled.h4`
  color:#195aab;
`
function PokeCard(props) {

  const [pokemon,setPokemon]=useState([])


  useEffect(()=>{
    pegaPokemon(props.pokeNome)
  },[props.pokeNome])


  const pegaPokemon=(pokeName)=>{
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((resposta)=>{setPokemon(resposta.data)})
    .catch((erro)=>{console.log(erro)})
  }
  return (
    
    <div>
      <Nomes> Nome: {pokemon.name}</Nomes>
      <Nomes> Peso: {pokemon.weight} Kg</Nomes>
      {pokemon.types && <Nomes> Tipo: {pokemon.types[0].type.name}</Nomes>}
      {pokemon.sprites && (<PokeImg src={pokemon.sprites.front_default} alt={pokemon.name}/>)}
    </div>
  );
}

export default PokeCard;
