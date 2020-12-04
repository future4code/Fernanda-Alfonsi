import React from "react"
import { useHistory } from "react-router-dom"
import {goToPost} from "../router/cordinator"
import styled from "styled-components"
import {votePost} from "../services/votes"
// import InteractiveCard from "../components/InteractiveCard"
import fogueteDown from "../img/fogueteDown.png"
import fogueteUp from "../img/fogueteUp.png"

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
    /* flex-direction:column; */
    
    img{
        width:40px;
        height:35px;
    }

`
const InteractiveCard = styled.div`
    display:flex;
    justify-content:space-between;

`
const PostCard = (props) => {

    const history = useHistory()

    const handleVote = (vote)=>{
        const body={
            direction:vote
        }
        console.log(props.getPost)
        votePost(body,props.id,props.getVote)
    }
    return (
        <CardContainer >   
            <div onClick={() => goToPost(history, props.id)}>
                <CardName>
                    <h3>{props.name}</h3>
                </CardName>
                <CardText>
                    <h4>{props.title}</h4>
                    <p>{props.text}</p>
                </CardText>
            </div>
            
            {/* <InteractiveCard
                handleVote={()=>handleVote()}
                voteCount={props.voteCount}  
                commentsCount={props.commentsCount}
                voteDirection={props.voteDirection}
              /> */}
            <InteractiveCard>
            
                <CardButtons>
                    <img src={fogueteUp} onClick={()=>handleVote(1)}/>
                    <p>{props.voteCount}</p>
                    <img src={fogueteDown} onClick={()=>handleVote(-1)}/>
                </CardButtons>      
                <div>
                    <p>comentários: {props.commentsCount}</p>
                </div>  
            </InteractiveCard>

        </CardContainer>
    );
}

export default PostCard