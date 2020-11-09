import React from "react";
import axios from "axios";
import styled from "styled-components"

const EstiloFormulario=styled.form`
    display:flex;
    flex-direction:column;
`
    

class CadastroUsers extends React.Component {
 
  render(){
    return (<div>
      <EstiloFormulario>
        <label>Nome:
        <br/>
          <input
            value={this.state.usersValue}
          />
        </label>
            
        <label>O E-mail:
        <br/>
          <input
            value={this.state.usersValue}
          />
         </label>
      </EstiloFormulario>
      <button>Salvar</button>
    </div>
      
      
      );
  }
  
}

export default CadastroUsers;