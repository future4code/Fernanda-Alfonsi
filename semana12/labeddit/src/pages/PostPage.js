import React from 'react'
import { useProtectedPage} from '../hooks/useProtectedPage'
import { useParams } from 'react-router-dom';
import {useRequestData} from "../hooks/useRequestData"
import {useForm} from "../hooks/useForm"
import CommentCard from "../components/CommentCard"
import styled from "styled-components"
import {TextField} from '@material-ui/core'
import {createComments} from "../services/posts"
import {votePost} from "../services/votes"
import fogueteDown from "../img/fogueteDown.png"
import fogueteUp from "../img/fogueteUp.png"

const PostContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100vw;
    `
const FormContainer = styled.form`
    display: flex;
    justify-content: space-around;
    margin:0px 10px;
`
const CreateCommentContainer = styled.div`
     margin-top:20px;
    
    button{
      height:50px;
      margin-left:20px;
      border-radius:20%;
      background-color:#1f4863;
      color:white;
      border:none;
      width: 80px;
    }
`
const TextFieldStyled  = styled(TextField)`
    background-color:white;
    width:45vw;
`

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
function PostPage() {
  useProtectedPage()
  const params = useParams()
    
  const [data, getPost]=useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${params.id}`,undefined)

  const {form, onChange, resetForm} = useForm({ text: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        createComments(form,params.id, resetForm, getPost)
    }

    const handleVote = (vote)=>{
      const body={
          direction:vote
      }
      console.log(getPost)
      votePost(body,params.id,getPost)
    }

 
  return(
    < PostContainer>
          {data && <CardContainer>
              <CardName>
              <h3>{data.post.username}</h3>
              </CardName>
              <CardText>
                <h4>{data.post.title}</h4>
                <p>{data.post.text}</p>
              </CardText>
              <InteractiveCard>      
                <CardButtons>
                    <img src={fogueteUp} onClick={()=>handleVote(1)}/>
                    <p>{data.post.votesCount}</p>
                    <img src={fogueteDown} onClick={()=>handleVote(-1)}/>
                </CardButtons>      
                <div>
                    <p>comentários: {data.post.commentsCount}</p>
                </div>  
            </InteractiveCard>
          </CardContainer> }

          <CreateCommentContainer>
            
              <FormContainer 
              onSubmit={handleSubmission} 
              >
                      <TextFieldStyled
                          label="comente este post"
                          variant="outlined"
                          name="text"
                          value={form.text}
                          onChange={handleInputChange}
                      />
                      <button> Comentar </button>
              </FormContainer>      
          </CreateCommentContainer>
          {data && data.post.comments.map((comment)=>{
            return (
            
              <CommentCard
                key={comment.id}
                name={comment.username}
                text={comment.text}
                commentId={comment.id}
                postId={data.post.id}
                count={comment.votesCount}
                direction={comment.userVoteDirection}
                getVote={getPost}
              />
            )
          })}
    </ PostContainer>
  )
}

export default PostPage;
