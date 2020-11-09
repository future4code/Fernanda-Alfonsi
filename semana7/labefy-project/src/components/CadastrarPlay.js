import React from "react";
import styled from "styled-components"
import axios from "axios";
import VerApagarPlay from "./VerApagarPlay";



class CadastrarPlay extends React.Component {
  state = {
    
    playlistValue: "",
    cadastrar: true
  };

  
  

  
  criarPlaylist = () => {
    const body = {
      name: this.state.playlistValue
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "fernanda-garcia-dumont"
          }
        }
      )
      .then((resposta) => {
        this.setState({ playlistValue: "" },
            alert("Uhulll!!! Sua lista foi criada com sucesso!"),
        );
        
      })
      .catch((error) => {
        console.log(error.message);
        alert("Ops, Não podemos criar duas listas com o mesmo nome. Veja se esta playlist já não existe!")
    });
  };

    onChangePlaylistValue = (event) => {
        this.setState({ playlistValue: event.target.value });
    }

    mudaPag = () => {
        this.setState({cadastrar: !this.state.cadastrar});
      
    }

  render() {
    const mudarPagina=this.state.cadastrar? 
    <div>
        <h3>Crie Suas Playlists e Labefyze-se</h3>
        <input
        placeholder="Nome da Playlist"
        value={this.state.playlistValue}
        onChange={this.onChangePlaylistValue}
        />
        <button onClick={this.criarPlaylist}>Criar Playlist</button>
        
    </div> 
    : <VerApagarPlay />;
    return (
     
        <div>
            {mudarPagina}
            <button onClick={this.mudaPag}>Ver minhas playlists - VOLTAR </button>
        </div>
       
      
    );
  }
}

export default CadastrarPlay;