import React from "react";
import styled from "styled-components"
import axios from "axios";

const DivPrincipal=styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`
const DeleteButton = styled.span`
  color: red;
  margin-left: 10px;
`;

class VerApagarPlay extends React.Component {
  state = {
    playlists: [],
    playlistValue: ""
  };

  componentDidMount = () => {
    this.mostrarPlaylist();
  };

  mostrarPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "fernanda-garcia-dumont"
          }
        }
      )
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  apagarPlaylist = (playlistId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        {
          headers: {
            Authorization: "fernanda-garcia-dumont"
          }
        }
      )
      .then((resposta) => {
        this.mostrarPlaylist()
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  };

  
  render() {
    const renderizarPLaylist = this.state.playlists.map((playlist) => {
      return <div>
          <p key={playlist.id}>{playlist.name}<DeleteButton onClick={() => this.apagarPlaylist(playlist.id)}>X</DeleteButton></p>
          <button onClick={() => this.mostrarMusicas(playlist.id)}>Ver minha músicas</button>
          </div>
    
    });

    return (
      <DivPrincipal>
        {renderizarPLaylist}
      </DivPrincipal>

    );
  }
}

export default VerApagarPlay;