import React from 'react'
import styled from "styled-components"
import fogueteDown from "../img/fogueteDown.png"
import fogueteUp from "../img/fogueteUp.png"

const CardButtons = styled.div`
    display:flex;
    /* flex-direction:column; */
    
    img{
        width:40px;
        height:35px;
    }

`
const InteractiveContainer = styled.div`
    display:flex;
    justify-content:space-between;

`


function InteractiveCard(props) {

      const colorButtonAndVotes = ()=>{
        if(props.voteDirection===0){
        return(
          <CardButtons>
          <img src={fogueteUp} onClick={()=>props.handleVote(1)}/>
          <p>{props.voteCount}</p>
          <img src={fogueteDown} onClick={()=>props.handleVote(-1)}/>
          </CardButtons> 

        )
      }
    }



  return (
    <InteractiveContainer>      
      <CardButtons>
          <img src={fogueteUp} onClick={()=>props.handleVote(1)}/>
          <p>{props.voteCount}</p>
          <img src={fogueteDown} onClick={()=>props.handleVote(-1)}/>
      </CardButtons>      
      <div>
          <p>comentários: {props.commentsCount}</p>
      </div>  
  </InteractiveContainer>
       
  );
}

export default InteractiveCard
