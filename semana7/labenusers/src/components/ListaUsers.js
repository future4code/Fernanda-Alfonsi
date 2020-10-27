import React from "react";
import axios from "axios";


class ListaUsers extends React.Component {
  state = {
    playlists: [],
    playlistValue: ""
  };
  render(){
    return (
      <div>
        <h3>Usuários Cadastrados:</h3>
        <p>Eu sou a lista de usuários</p>
        <button>X</button>
      </div>
      
      );
  }
  
}

export default ListaUsers;