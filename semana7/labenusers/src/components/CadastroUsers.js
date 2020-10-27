import React from "react";
import axios from "axios";
// import styled from "styled-components"

// const EstiloFormulári=styled.div`
//     display:flex;
//     flex-direction:column;
//     border: black;

class CadastroUsers extends React.Component {
  state = {
    listaDeUsers: [],
    usersValue: ""
  };
  render(){
    return (
        <div>
            <form>
              <label>Nome:
                <input
                value={this.state.usersValue}
                />
              </label>
            
              <label>O email:
                <input
                value={this.state.usersValue}
              />
              </label>
              
            </form>
            
        </div>
      
      );
  }
  
}

export default CadastroUsers;