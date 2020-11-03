import React from "react";
import styled from "styled-components"
import axios from "axios";
import VerDetalhes from "./VerDetalhes";

const DivPrincipal=styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`
const DivList=styled.div`
  display:flex;
  /* align-items: flex-start; */
  padding: 1em;
`
const DeleteButton = styled.span`
  color: red;
  margin-left: 10px;
`;

class VerApagarPlay extends React.Component {
  state = {
    playlists: [],
    verApaga:true,
    tracks: [],
    nameValue: "",
    artistValue: "",
    urlValue: "",
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

  mostrarMusicas = (idPlaylis) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylis}/tracks/`,
        {
          headers: {
            Authorization: "fernanda-garcia-dumont"
          }
        }
      )
      .then((resposta) => {
        this.setState({ tracks: resposta.data.result.tracks });
      })
      .catch((erro) => {
        console.log(erro.message);
      });
  };

  criarMusicas = (playlistId) => {
    const body = {
      name: this.state.nameValue,
      artist: this.state.artistValue,
      url: this.state.urlValue,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:${playlistId}/tracks/`,
        body,
        {
          headers: {
            Authorization: "fernanda-garcia-dumont"
          }
        }
      )
      .then((resposta) => {
        this.setState({  nameValue: "", artistValue:"",urlValue:"" },
            alert("Oba! Você incuiu uma música!"),
        );
        
      })
      .catch((error) => {
        console.log(error.message);
        alert("Ops, Não deu para criar uma música")
    });
  };

    onChangeNameValue = (event) => {
        this.setState({ nameValue: event.target.value });
    }
    onChangeArtistValue = (event) => {
      this.setState({ artistValue: event.target.value });
    }
    onChangeUrlValue = (event) => {
      this.setState({ urlValue: event.target.value });
  }
    

  
  render() {
    const renderizarPLaylist= this.state.playlists.map((playlist) => {
      return <DivList>
         <button onClick={() => this. mostrarMusicas(playlist.id)}>Ver minha músicas</button>
          <p key={playlist.id}>{playlist.name}<DeleteButton onClick={() => this.apagarPlaylist(playlist.id)}>X</DeleteButton></p>
          <button onClick={()=>this.criarMusicas(playlist.id)}>Incuir Música</button>
      </DivList>;

      
    });
    const renderizarDetalhes= this.state.tracks.map((track) => {
      return <div>
          <p key={track.id}>{track.name}</p>
          <p key={track.id}>{track.artist}</p>
          <p key={track.id}>{track.url}</p>
        </div>
     });
             
     

    return (
      <DivPrincipal>
        <h3>Playlists:</h3>
        {renderizarPLaylist}
        {renderizarDetalhes}
        <div>
            
            <h3>Inclua músicas à sua playlist</h3>
             <input
             placeholder="Nome da música"
             value={this.state.nameValue}
             onChange={this.onChangeNameValue}
            />
             <input
             placeholder="Nome do Artista"
             value={this.state.artistValue}
             onChange={this.onChangeArtistValue}
            />
             <input
             placeholder="Url da música"
             value={this.state.urlValue}
             onChange={this.onChangeUrlValue}
             />
           </div>
      </DivPrincipal>

    );
  }
}

export default VerApagarPlay;