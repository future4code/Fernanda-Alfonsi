import React from 'react'
import { useRequestData} from '../../hooks/useRequestData';
import { useProtectedPage} from '../../hooks/useProtectedPage'
import PostCard from "../../components/PostCard"
import {useForm} from "../../hooks/useForm"
import {createPost} from "../../services/posts"
import {FeedContainer,CreatePostContainer,FormContainer,TextFieldStyled,ButtonEffect} from './styled'



function FeedPage() {

  useProtectedPage()
 
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
        
        <FeedContainer>
          <CreatePostContainer>
              <FormContainer 
              onSubmit={handleSubmission} 
              >
                      <TextFieldStyled
                          label="Título do post"
                          variant="outlined"
                          name="title"
                          value={form.title}
                          onChange={handleInputChange}
                      />
                      <TextFieldStyled 
                          label="Texto do seu post"
                          variant="outlined"                
                          name="text"
                          value={form.text}
                          onChange={handleInputChange}
                      />

                      <ButtonEffect>Criar post</ButtonEffect>
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
