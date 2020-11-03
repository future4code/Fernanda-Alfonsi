// import React from "react";
// import axios from "axios";
// import styled from "styled-components";

// class AddMusicas extends React.Component {
//   state = {
//     tracks:[
//       {   
//         name: "Não vá se perder por aí",
//         artist: "Mutantes",
//         url:"https://www.youtube.com/watch?v=tdSWaYRexeU"
//       }
//       ],
//     nameValue: "",
//     artistValue: "",
//     urlValue: "",
   
//   };

  
  

  
//   criarMusicas = (playlistId) => {
//     const body = {
//       name: this.state.nameValue,
//       artist: this.state.artistValue,
//       url: this.state.urlValue
//     };

//     axios
//       .post(
//         `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:${playlistId}/trakcs`,
//         body,
//         {
//           headers: {
//             Authorization: "fernanda-garcia-dumont"
//           }
//         }
//       )
//       .then((resposta) => {
//         this.setState({  nameValue: "", artistValue:"",urlValue:"" },
//             alert("Oba! Você incuiu uma música!"),
//         );
        
//       })
//       .catch((error) => {
//         console.log(error.message);
//         alert("Ops, Não deu para criar uma música")
//     });
//   };

//     onChangeNameValue = (event) => {
//         this.setState({ nameValue: event.target.value });
//     }
//     onChangeArtistValue = (event) => {
//       this.setState({ artistValue: event.target.value });
//     }
//     onChangeUrlValue = (event) => {
//       this.setState({ urlValue: event.target.value });
//   }
   
    

//   render() {
    
//     return (
     
//         <div>
            
//          <h3>Inclua músicas à sua playlist</h3>
//           <input
//           placeholder="Nome da música"
//           value={this.state.nameValue}
//           onChange={this.onChangeNameValue}
//          />
//           <input
//           placeholder="Nome do Artista"
//           value={this.state.artistValue}
//           onChange={this.onChangeArtistValue}
//          />
//           <input
//           placeholder="Url da música"
//           value={this.state.urlValue}
//           onChange={this.onChangeUrlValue}
//           />
        
//           {/* <button onClick={()=>this.criarPlaylist(playlist.id)}>Incuir Música</button> */}
        
    
//         </div>
       
      
//     );
//   }
// }

// export default AddMusicas;