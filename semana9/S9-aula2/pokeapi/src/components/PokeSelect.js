import React,{useState} from "react";
import PokeCard from './components/PokeCard';


function PokeSelect() {

    const[pokeName,setPokeName]=useState("")

  
    useEffect(()=>{
      pegaPokemon(pokeName)
    }, [pokeList]);
  
    const pegaPokemon=(pokeName) =>{Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then((resposta)=>{setPokeList(resposta.data.results);})
    .catch((erro)=>{alert(`Ixi, deu Ruim. Não conseguimos achar os pokemons, o erro é ${erro}` )})
  }
    
    }

    const onChanheSelect=(event)=>{
        setPokeName(event.target.value)

  return (
    <div>
      <select>
        <option value={""}>nenhum</option>
        <option value={pokename} onChange={onChanheSelect}>pokemon</option>
      </select>
      <PokeCard/>
    </div>
  );
}

export default PokeSelect;
