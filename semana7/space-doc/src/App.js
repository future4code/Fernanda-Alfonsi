
import React from "react";
import styled from "styled-components"
import axios from "axios"

const ImagemSatelite =styled.img`
  width: 7em;
  margin: 0em 6em;
`



class App extends React.Component{

  state={
    listaMissoes: [],
    selectHistoria:""

  }
  onChangeSelect = (event) => {
    console.log("SELECIONOU ALGO", event.target.value);
    const apiUrl = `https://api.spacexdata.com/v3/history/${event.target.value}`;
    axios.get(apiUrl).then((response) => {
     
      this.setState({
        selectHistoria: response.data.description
      });
    });
  };
  render(){
    console.log(this.state.listaMissoes);
    const optionList = this.state.listaMissoes.map((missao) => {
      return <option key={missao.id}>{missao.title}</option>;
    });
    return (<div>
      <header>
      <h1><ImagemSatelite src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSV8yIOFmNCvTAb3Nog9esbmcL1Kk7cVlEXZA&usqp=CAU"/> Space history</h1>
       </header>
      <div>
        <h3>Escolha uma missão e conheça sua história. </h3>
        <select on onChange={this.onChangeSelect}>
          {optionList}
        </select>
        <hr></hr>
        <h3> <ImagemSatelite src="https://e7.pngegg.com/pngimages/868/698/png-clipart-graphics-drawing-design-satellite-signals-purple-cartoon.png"/>História:</h3>
      </div>
    </div>

    
      );
  }
}
 

export default App;
