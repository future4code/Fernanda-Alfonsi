import React from "react";
import axios from "axios";
import ListaUsers from "./components/ListaUsers"
import CadastroUsers from "./components/CadastroUsers"


class App extends React.Component {
  state = {
    playlists: [],
    playlistValue: ""
  };
  render(){
    return (
      <div>
        <p>oi tudo bem?</p>
        <ListaUsers/>
        <CadastroUsers/>
      </div>
      
      );
  }
  
}

export default App;
