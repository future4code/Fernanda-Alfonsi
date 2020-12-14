import React from 'react'
import { useProtectedPage} from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom';
import {useRequestData} from "../../hooks/useRequestData"
import {useForm} from "../../hooks/useForm"
import CommentCard from "../../components/CommentCard"
import {createComments} from "../../services/posts"
import {votePost} from "../../services/votes"
import PostCard from "../../components/PostCard"
import {PostContainer,FormContainer,TextFieldStyled,ButtonEffect,CardContainer,} from './styled'

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

    

 
  return(
    < PostContainer>
          {data && <CardContainer>

            <PostCard
                key={data.post.id}
                name={data.post.username}
                text={data.post.text}
                title={data.post.title}
                id={data.post.id}
                voteCount={data.post.votesCount}
                voteDirection={data.post.userVoteDirection}
                commentsCount={data.post.commentsCount}
                getVote={getPost}

              />
              
          </CardContainer> }
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
                      <ButtonEffect> Comentar </ButtonEffect>
              </FormContainer>      
         
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
