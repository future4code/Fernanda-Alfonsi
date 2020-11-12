import react,{useState} from "react"
import styled from "styled-components"
import axios from "axios"
import relacao from "../img/relação.png"
import titulo from "../img/título.png"
import coracao from "../img/coração-planeta.png"
import cometa from "../img/cometa.png"

const Titulo = styled.img`
width: 200px;
margin-right: 40px;
margin-left:70px;
`


const AppDisplay = styled.div`
display: flex;
flex-direction:column;
align-items:center;
background-color:white;
margin:15px;
border-radius:10%;
width:400px;
height:600px;
`
const Imagem = styled.img`
width: 250px;
height:350px;
margin:25px;
border:solid;
`

const BtMatch = styled.img`
width: 70px;
height:70px;
border-radius:50%;
margin: 0px 50px;
border:none;
`
const BtPageMach = styled.img`
width: 50px;
height:50px;
border-radius:50%;
margin:2px;
border:none;

`


function ChoiceMatch(props) {

  const[perfis,setPerfis]=useState({
    profile: {
      id: "",
      age: "",
      name: "",
      photo: "",
      bio: ""
  }})

  const profileUser=()=>{
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
    .then((response)=>{setPerfis(response.profile)}).catch((error)=>{ console.log(error)})

  }
  return (
  
    // fazer um map que pegue a perfis do estado
    <AppDisplay>

    <div>
        <Titulo src={titulo} alt="Astromatch"/>
        <BtPageMach src={relacao} onClick={props.onClickChangePage}/>
    </div>
    <hr/>

      <Imagem src={perfis.photo} alt="perfil"/>

    <div>
      < BtMatch src={cometa}/>
      < BtMatch src={coracao}/>
    </div>

    </AppDisplay>
    
  
    
  );
}

export default ChoiceMatch;
