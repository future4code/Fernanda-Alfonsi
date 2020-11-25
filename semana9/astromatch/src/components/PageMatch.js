import styled from "styled-components"
import voltar from "../img/voltar.png"
import titulo from "../img/título.png"
import React,{ useEffect, useState } from "react"
import axios from "axios"
import buracoNegro from "../img/buraco-negro.png"

const BtPageChoice = styled.img`
width: 50px;
height:50px;
border-radius:50%;
margin:2px;
`

const AppDisplay = styled.div`
background-color:white;
margin:30px;
border-radius:10%;
width:400px;
height:600px;
`
const MatchDisplay = styled.div`
display: flex;
`
const Body = styled.div`
overflow: hidden;
overflow-y: scroll;
`

const Titulo = styled.img`
width: 200px;
margin-left: 40px;
margin-right:80px;
`

const ImagemUser = styled.img`
width: 50px;
height:50px;
border-radius:50%;
margin:5px;
border:none;
`

const BtClear = styled.img`
width: 80px;
height:80px;
border-radius:50%;
margin-left:35em;
`

function PageMatch(props) {

  const[profileMatch,setProfileMatch]=useState([])
  const[clear,setClear]=useState({})

    useEffect(()=>{getProfileMatchUser()},[])

  const getProfileMatchUser=()=>{
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda/matches`)
    .then((response)=>{setProfileMatch(response.data.matches) (console.log("PageMatch",response))})
    .catch((error)=>{ console.log(error.menssage)})
  }

  const putClearUser=(id,choice)=>{
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda/clear`)
    .then((response)=>{(getProfileMatchUser()) (setClear(response.data))(console.log("put ok",response))})
    .catch((error)=>{ console.log("putErr",error.menssage)})
  }

  const matchCrush = profileMatch.map((crush)=>{
    return <MatchDisplay>
        <ImagemUser src={crush.photo} alt={crush.name}/>
        <p key={crush.id}>{crush.name}, {crush.age}</p>
        
      </MatchDisplay>
  });

  return (
    <AppDisplay>
      <header>
        <BtPageChoice src={voltar} onClick={props.onClickChangePage}/>
        <Titulo src={titulo} alt="Astromatch"/>
      </header>
      <hr/>
     <Body>
        {matchCrush}
     </Body>
      
  
     <BtClear onClick={()=>{putClearUser(clear.id,clear.choice)}} src={buracoNegro} alt="buraco negro clear"/>
    </AppDisplay>
    
  
    
  );
}

export default PageMatch;
