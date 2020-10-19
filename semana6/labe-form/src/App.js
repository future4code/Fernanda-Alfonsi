import React from 'react';
import styled from 'styled-components'
import Etapa1 from "./componets/Etapa1";
import Etapa2 from "./componets/Etapa2";
import Etapa3 from "./componets/Etapa3";
import Final from "./componets/Final";


const AppContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;

`
 const AppButton = styled.button`
    margin: 5em 3em;
    padding: 0.5em;
    border-color:gray;
`
class App extends React.Component{
  state={
    etapa: 1,
  
  }
  irParaProximaEtapa=(event)=>{
   this.setState({ etapa: this.state.etapa + 1});
  }

  renderizaEtapa=()=>{
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return null;
    }
  }  
  render() {

  
    return (
      
       <AppContainer> <div>
        {this.renderizaEtapa()}
        {this.state.etapa !==4 && <AppButton><button onClick={this.irParaProximaEtapa}>Próxima etapa </button></AppButton>}
        </div></AppContainer>
      
    );
  }
}

export default App;
