import React from 'react';
import {useForm} from "../hooks/useForm"
import {TextField, Button} from '@material-ui/core'
// import logo from '../../assets/logo.png'
// import { FormContainer, SignupPageContainer } from './styles';
import { useHistory } from 'react-router-dom'
import {signup} from "../services/user"
import {useUnProtectedPage} from '../hooks/useUnProtectedPage'
import styled from 'styled-components'

const SignupPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 0 auto;
`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 30vh;
    justify-content: space-around;
    margin-bottom: 15px;
`

function RegisterFormPage() {
  useUnProtectedPage()
  const history = useHistory()
  const {form, onChange} = useForm({email: "", password: "", username: ""})

  const handleInputChange = (event) => {
      const {value, name} = event.target

      onChange(value, name)
  }

  const handleSubmission = (event) => {
      event.preventDefault()
      
      signup(form, history)
  }

  return (
      <SignupPageContainer>
          {/* <img src={logo} /> */}
          <FormContainer onSubmit={handleSubmission} >
              <TextField 
                  label="Nome"
                  variant="outlined"
                  name="username"
                  value={form.username}
                  onChange={handleInputChange}
              />
              <TextField 
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
              />
              <TextField  
                  label="Senha"
                  variant="outlined"                
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
              />
              <Button
                  variant="contained"
                  color="primary"
                  type="submit"
              >
                  Cadastrar
              </Button>
          </FormContainer>
      </SignupPageContainer>
  )
}
export default RegisterFormPage;
