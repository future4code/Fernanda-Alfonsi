import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components"

const ContairerInput = styled.span`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: gray;
  padding:2em
  `
  

class App extends React.Component {

  state = {
    // Lista de pessoas colocada no estado
    post: [
      // O objeto abaixo representa uma pessoa. Ele possui
      // duas propridades: nome e email.
      {
        nomeUsuario:"paulinha",
        fotoUsuario:"https://picsum.photos/50/50?=1",
        fotoPost:"https://picsum.photos/200/150?=1"
      },
      {
        nomeUsuario:"Afrodite",
        fotoUsuario:"https://picsum.photos/50/50?=2",
        fotoPost:"https://picsum.photos/200/150?=2"
      },
      {
        nomeUsuario:"Minerva",
        fotoUsuario:"https://picsum.photos/50/50?=3'",
        fotoPost: "https://picsum.photos/200/150?=3"
      }
    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };
  adicionaPost = () => {
    // Colocamos em uma variavel o objeto que representa uma nova pessoa
    const novoPost = {
      // Puxamos da variavel de estado "valorInputPessoa" o nome dela
      nomeUsuario: this.state.valorInputUsuario,
      // Puxamos da variavel de estado "valorInputEmail" o email dela
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    // Copia array de pessoas e adiciona uma pessoa no final
    const novaPostagem = [...this.state.post, novoPost];

    // Define o estado "pessoas" como a variavel "novoPessoas"
    this.setState({ post: novaPostagem });
    this.setState({ valorInputUsuario: "" });
    this.setState({ valorInputFotoUsuario: "" });
    this.setState({ valorInputFotoPost: "" });
  };

  onChangeInputUsuario = (event) => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de nome

    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de email

    // Define o estado "valorInputEmail" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    // Essa função é chamada toda vez que algo é digitado
    // no input de nome

    // Define o estado "valorInputPessoa" como o
    // valor atual do input, que vem do event
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaPost = this.state.post.map((postagem)=>{
      return(
        
      
       <Post
        fotoUsuario={postagem.fotoUsuario} 
        nomeUsuario={postagem.nomeUsuario}
        fotoPost={postagem.fotoPost}
        ></Post>
        
       
     
      
      );
    });
    return (
     
      <div>
         <div><ContairerInput>
      <input
        // Mesma lógica do exemplo anterior
        value={this.state.valorInputUsuario}
        // Repare na função que é passada aqui no onChange
        onChange={this.onChangeInputUsuario}
        placeholder={"Usuário"}
      />
      <input
        // Diferente do input acima, a variável de estado aqui é outra
        value={this.state.valorInputFotoUsuario}
        // E a função também é outra
        onChange={this.onChangeInputFotoUsuario}
        placeholder={"Foto do Usuário "}
      />
      <input
        // Diferente do input acima, a variável de estado aqui é outra
        value={this.state.valorInputFotoPost}
        // E a função também é outra
        onChange={this.onChangeInputFotoPost}
        placeholder={"Foto do post"}
      />
      <button onClick={this.adicionaPost}>Adicionar</button>
      </ContairerInput></div>
    <div className={'app-container'}>
        {listaPost}
    </div>
    </div>
        
      
    );
  }
}

export default App;
