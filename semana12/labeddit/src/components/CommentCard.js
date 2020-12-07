import React from "react"
import styled from "styled-components"
import InteractiveCard from "../components/InteractiveCard"
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
    h5{
        color:#1f4863;
    }
`
const CardText = styled.div`
    display:flex;
    flex-direction:column;

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
                <h5>{props.name}</h5>
            </CardName>
            <CardText>
                
                <p>{props.text}</p>
            </CardText>
            <InteractiveCard
                    voteDirection={props.direction}
                    voteCount={props.count}
                    handleVote={handleVote}
                />
            
        </CardContainer>
    );
}

export default CommentCard