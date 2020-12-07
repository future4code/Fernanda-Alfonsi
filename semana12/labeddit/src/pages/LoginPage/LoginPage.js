import React from "react";
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import {useUnProtectedPage } from '../../hooks/useUnProtectedPage';
import {TextField, Button,spacing} from '@material-ui/core'
import { login } from '../../services/user';
import {useForm} from "../../hooks/useForm"
import { goToRegister } from "../../router/cordinator"
import {ContainerFormLogin,FormContainer,TextFieldStyled,ButtonEffect} from './styled'


  
function LoginPage() {
  useUnProtectedPage()
  const history = useHistory();
  const {form, onChange} = useForm({email: "", password: ""})

//   const theme = {
//     spacing: 8,
//   }

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history)
    }


    return(
      <ContainerFormLogin>
          
          <FormContainer onSubmit={handleSubmission} >
             
              <TextFieldStyled 
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
              />
             
             
              <TextFieldStyled  
                  label="Senha"
                  variant="outlined"                
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
              />
             
              <ButtonEffect> Login </ButtonEffect>
          </FormContainer>
          <Button 
          onClick={()=>goToRegister(history)}
          >
              Não tem Login? Clique aqui
          </Button>
      </ContainerFormLogin>
  )
}

  

export default LoginPage;
