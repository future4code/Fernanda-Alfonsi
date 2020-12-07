import React from 'react'
import styled from "styled-components"
import {votePost} from "../services/votes"
import fogueteDown from "../img/fogueteDown.png"
import fogueteUp from "../img/fogueteUp.png"
import fogueteUpGreen from "../img/fogueteUpGreen.png"
import fogueteDownRed from "../img/fogueteDownRed.png"


const CardButtons = styled.div`
    display:flex;
    img{
        width:40px;
        height:35px;
    }
`



function InteractiveCard(props) {

//   const handleVote = (vote)=>{
//     const body={
//         direction:vote
//     }
//     console.log(props.getPost)
//     votePost(body,props.id,props.getVote)

   
// }




function colorButtonAndVotes(){
    if(props.voteDirection===0){
      return(
        <CardButtons>
        <img src={props.voteDirection===1? fogueteUpGreen : fogueteUp} onClick={()=>props.handleVote(1)}/>
        <p>{props.voteCount}</p>
        <img src={fogueteDown} onClick={()=>props.handleVote(-1)}/>
        </CardButtons> 
      )
    }else{
      return(
        <CardButtons>
        <img src={props.voteDirection===1? fogueteUpGreen : fogueteUp} onClick={()=>props.handleVote(0)}/>
        <p>{props.voteCount}</p>
        <img src={props.voteDirection===-1? fogueteDownRed : fogueteDown} onClick={()=>props.handleVote(0)}/>
        </CardButtons> 
      )
    }
}




  return (
    <div>
      {colorButtonAndVotes()} 
    </div>
    
  );
}

export default InteractiveCard
