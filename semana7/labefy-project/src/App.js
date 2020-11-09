import React from "react";
import styled from "styled-components"
import axios from "axios";
import CadastrarPlay from "./components/CadastrarPlay";
import VerApagarPlay from "./components/VerApagarPlay";
import VerDetalhes from "./components/VerDetalhes";
import AddMusicas from "./components/AddMusica";

const DivPrincipal=styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    
  };

  

  render() {
    
  

    return (
      <DivPrincipal>
        <CadastrarPlay/>
       
      </DivPrincipal>
    );
  }
}

export default App;