import React from 'react'
// import { useHistory } from 'react-router-dom'
import { useRequestData} from '../hooks/useRequestData';
import { useProtectedPage} from '../hooks/useProtectedPage'
import PostCard from "../components/PostCard"
import NavBar from "../components/NavBar"
import {TextField} from '@material-ui/core'
import {useForm} from "../hooks/useForm"
import {createPost} from "../services/posts"
import styled from "styled-components"

const FeedContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100vw;
`
const FormContainer = styled.form`
    display: flex;
    justify-content: space-around;
    margin:0px 10px;
    /* align-items: center; */
`
const CreatePostContainer = styled.div`
    margin-top:20px;
    
    button{
      height:50px;
      margin-right:40px;
      border-radius:20%;
      background-color:#1f4863;
      color:white;
      border:none;
    }
`
const TextFieldStyled  = styled(TextField)`
    background-color:white;
    
`
function FeedPage() {

  useProtectedPage()
  // const history = useHistory()
  const {form, onChange,resetForm} = useForm({title: "", text: ""})

  const handleInputChange = (event) => {
      const {value, name} = event.target
      onChange(value, name)
  }

  const handleSubmission = (event) => {
      event.preventDefault()
      createPost(form, resetForm, getPost)
  }  

  const [data,getPost] = useRequestData(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts`, undefined)

  console.log(getPost)
  return (
    <div>
        <NavBar/>
        <FeedContainer>
          <CreatePostContainer>
            <h4>Aqui você cria seu post</h4>
              <FormContainer 
              onSubmit={handleSubmission} 
              >
                      <TextFieldStyled
                          label="Título"
                          variant="outlined"
                          name="title"
                          value={form.title}
                          onChange={handleInputChange}
                      />
                      <TextFieldStyled 
                          label="Texto do Post"
                          variant="outlined"                
                          name="text"
                          value={form.text}
                          onChange={handleInputChange}
                      />

                      <button>Criar post</button>
              </FormContainer>      
          </CreatePostContainer>

          {data && data.posts.map((post)=>{
            return (
            
              <PostCard
                key={post.id}
                name={post.username}
                text={post.text}
                title={post.title}
                id={post.id}
                voteCount={post.votesCount}
                voteDirection={post.userVoteDirection}
                commentsCount={post.commentsCount}
                getVote={getPost}

              />
            )
          })}
        </FeedContainer>
    
  </div>
       
  );
}

export default FeedPage;
