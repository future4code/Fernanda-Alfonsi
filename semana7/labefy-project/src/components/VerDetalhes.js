// import React from "react";
// import axios from "axios";
// import styled from "styled-components";

// const DivPrincipal=styled.div`
//   display:flex;
//   flex-direction: column;
//   align-items: center;
// `

// class VerDetalhes extends React.Component {
//   state = {
//       tracks:[
//       {
//         id: "f5784425-ae50-44a1-8918-7a56d2aea7b3",
//         name: "Não vá se perder por aí",
//         artist: "Mutantes",
//         url:"https://www.youtube.com/watch?v=tdSWaYRexeU"
//       }
//       ]
   
//   }

//   componentDidMount = () => {
//     this.mostrarMusicas();
//   };

//   mostrarMusicas = (idPlaylis) => {
//     axios
//       .get(
//         `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylis}/${this.state.tracks}/`,
//         {
//           headers: {
//             Authorization: "fernanda-garcia-dumont"
//           }
//         }
//       )
//       .then((resposta) => {
//         this.setState({ tracks: resposta.data.result.tracks });
//       })
//       .catch((erro) => {
//         console.log(erro.message);
//       });
//   };

  
//   render() {
//    const renderizarDetalhes= this.state.tracks.map((track) => {
//       return <div>
//           <p key={track.id}>{track.name}</p>
//           <p key={track.id}>{track.artist}</p>
//           <p key={track.id}>{track.url}</p>
//         </div>
//      });

//     return (
//         <DivPrincipal>
//             {renderizarDetalhes}
//         </DivPrincipal>
//     );
//   }
// }


// export default VerDetalhes;