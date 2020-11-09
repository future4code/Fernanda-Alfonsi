import React from "react";
import axios from "axios";
import ListaUsers from "./components/ListaUsers"
import CadastroUsers from "./components/CadastroUsers"


class App extends React.Component {
  
    state = {
      listaDeUsers:[  ] ,
      usersValue: "",
      emailValue:"",
    }
  
    componentDidMount = () => {
      this.pegarUsuario();
    };
  
    pegarUsuario = () => {
      axios
        .get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          {
            headers: {
              Authorization: "fernanda-garcia-dumont"
            }
          }
        )
        .then((resposta) => {
          this.setState({listaDeUsers: resposta.data.Array.name });
          console.log(resposta)
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
  
    criarUsuario = () => {
      const body = {
        name: this.state.usersValue,
        email:this.state.emailValue

      };
  
      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",

          body,
          {
            headers: {
              Authorization: "fernanda-garcia-dumont"
            }
          }
        )
        .then((resposta) => {
          this.pegarUsuario();
          this.setState({usersValue: "" });
          this.setState({emailValue: "" });
          
        })
        .catch((error) => {
          console.log(error.message);
        });
    };
    
    onChangeUserValue = (event) => {
      this.setState({usersValue: event.target.value });
    };
    onChangeEmailValue = (event) => {
      this.setState({emailValue: event.target.value });
    };
  
    render() {
      const renderizarUsuarios = this.state.listaDeUsers.map((usuario) => {
        return <div>
          <h3>Usuários Cadastrados:</h3>
          <p key={usuario.id}>{usuario.name}</p>
            <button onClick={this.apagarUsuario}> X </button>
        </div>;
        

      });
  
      return (
        <div className="App">
          <div>
            <input
              placeholder="Nome do usuário"
              value={this.state.usersValue}
              onChange={this.onChangeUserValue}
            />
            <input
              placeholder="E-mail"
              value={this.state.emailValue}
              onChange={this.onChangeEmailValue}
            />
            <button onClick={this.criarUsuario }>Criar Usuário</button>
          </div>
          {renderizarUsuarios}
        </div>
      );
    }
  }
  
  export default App;
