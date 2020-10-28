import React from "react";
import axios from "axios";
import styled from "styled-components";


const EstiloTudo = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
`


const DeleteButton = styled.span`
  color: red;
  margin-left: 10px;
`
  

class DetalheUsers extends React.Component {
  state = {
    listaDetalheUsers:[ ] 
  };

  componentDidMount = () => {
      this.pegarUsuario()
    };

  pegarDetalheUsuario = (detalheId) => {
      axios
        .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${detalheId}`,
          {
            headers: {
              Authorization: "fernanda-garcia-dumont"
            }
          }).then((resposta) => {
          this.setState({listaDetalheUsers: resposta.data})
          // console.log(resposta)
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    apagarDetalheUsuario = (usuarioId) => {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`,
          {
            headers: {
              Authorization: "fernanda-garcia-dumont"
            }
          }
        )
        .then((resposta) => {
         this.pegarDetalheUsuario();
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

  render(){
    const renderizarDetalheUsuarios = this.state.listaDetalheUsers.map((usuario) => {
      return (     
        <p key={usuario.id}>
          {usuario.name}
          {usuario.email}
          <DeleteButton onClick={() => window.confirm("Tem certesa que quer apagar o usuário?") && this.apagarDetalheUsuario(usuario.id)}>
            X
          </DeleteButton>
        </p>
      );
    });
    return (
      <EstiloTudo>
         <h3>Detalhes dos Usuários:</h3>
        {renderizarDetalheUsuarios}
      </EstiloTudo>
    );  
      
  }
  
}

export default DetalheUsers;