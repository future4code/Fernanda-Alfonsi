
import React from "react";
import styled from "styled-components"
import axios from "axios"

const ImagemSatelite =styled.img`
  width: 7em;
  margin-right: 10em;
  
`
const DivPrincipal =styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;

`


class App extends React.Component{

  state={
    listaMissoes: [],
    detalheDaMissao:""

  };
  componentDidMount() {
    this.buscarMissoes();
    
  }
  

  buscarMissoes = () => {
    axios.get("https://api.spacexdata.com/v3/history").then((response) => {
      this.setState({listaMissoes: response.data });
    });
  };
  onClickSelect = (missaoId) => {
    axios.get(`https://api.spacexdata.com/v3/history/${missaoId}`).then((resposta) => {   this.setState({
        detalheDaMissao: resposta.data.details


      });
    });
  };
  
  render(){
    
    const listaOpçoes = this.state.listaMissoes.map((missao) => {
      return <option onClick={()=>this.onChangeSelect(missao.id)} key={missao.id}>{missao.title}</option>;

      
    });
    return (<div>
      <header>
      <h1><ImagemSatelite src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSV8yIOFmNCvTAb3Nog9esbmcL1Kk7cVlEXZA&usqp=CAU"/> Space history</h1>
       </header>
      <DivPrincipal>
        <h3>Escolha uma missão e conheça sua história. </h3>
        <select>
          {listaOpçoes}
        </select>
        <hr></hr>
        <h3>Detalhes da missão:</h3>
        <p> {this.state.detalheDaMissao}</p>
      </DivPrincipal>
    </div>

    
      );
  }
}
 

export default App;
