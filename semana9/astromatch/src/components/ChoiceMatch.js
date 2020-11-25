import React, {useEffect, useState} from "react"
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
width:30%;
height:100%;
`
const Imagem = styled.img`
width:80%;

border-radius:10%;
box-sizing: border-box;
`
const Info = styled.div`
margin-left: 2em;

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

  const[profile,setProfile]=useState({})
  const[isMatch,setISMatch]=useState(true)
  
    useEffect(()=>{getProfile()},[])

  const getProfile=()=>{
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda/person`)
    .then((response)=>{setProfile(response.data.profile) (console.log("getProfile ok",response))})
    .catch((error)=>{ console.log("GetProfileErr",error.menssage)})
  }


  const choiceUser=(id,isMatch)=>{
    console.log(isMatch)
    const body={
      id:id,
      choice:isMatch
    }
    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fernanda/choose-person`, body)
    .then((response)=>{(getProfile()) (console.log("pegoooou"))})
    .catch((error)=>{ console.log("choiceUserErr",error.menssage)})
  }
  
  const onClickMatchYes =()=>{
      choiceUser(profile.id,isMatch)
    }
  
  const onClickMatchNo =()=>{
    choiceUser(profile.id,!isMatch)
  }
  return (
    
    
    <AppDisplay>
    <div>
        <Titulo src={titulo} alt="Astromatch"/>
        <BtPageMach src={relacao} onClick={props.onClickChangePage}/>
    </div>
    <hr/>
    <Imagem src={profile.photo} alt={profile.name}/>
    <Info>
      <h4 >{profile.name}, {profile.age}</h4>
      <p >{profile.bio}</p>
    </Info>
    <div>
      < BtMatch src={cometa} onClick={onClickMatchNo} />
      < BtMatch src={coracao} onClick={onClickMatchYes}/>
    </div>
      
    </AppDisplay>
  );
}

export default ChoiceMatch;
