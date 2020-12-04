import React from "react"
import styled from "styled-components"
import fogueteDown from "../img/fogueteDown.png"
import fogueteUp from "../img/fogueteUp.png"
import {voteComments} from "../services/votes"

const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color:white;
    width:50vw;
    margin:20px;
    padding:20px;
`
const CardName = styled.div`
    display:flex;
    flex-direction:column;
    border-radius: 10px;
`
const CardText = styled.div`
    display:flex;
    flex-direction:column;

`

const CardButtons = styled.div`
    display:flex;
    img{
        width:40px;
        height:35px;
    }
`


const CommentCard = (props) => {

    const handleVote = (vote)=>{
        const body={
            direction:vote
        }
        console.log(props.getvote)
        voteComments(body,props.postId, props.commentId,props.getVote)
    }
    return (

    
        <CardContainer>
            <CardName>
                <h3>{props.name}</h3>
            </CardName>
            <CardText>
                
                <p>{props.text}</p>
            </CardText>
            <CardButtons>
               <img src={fogueteUp} onClick={()=>handleVote(1)} />
                <p>{props.count}</p>
                <img src={fogueteDown} onClick={()=>handleVote(-1)}/>
            </CardButtons>
        </CardContainer>
    );
}

export default CommentCard