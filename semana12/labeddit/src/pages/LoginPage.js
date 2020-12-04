import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
// import axios from "axios";
import styled from 'styled-components'
import {useUnProtectedPage } from '../hooks/useUnProtectedPage';
import {TextField, Button} from '@material-ui/core'
// import Header from './Header'
import { login } from '../services/user';
import {useForm} from "../hooks/useForm"
import { goToRegister } from "../router/cordinator"
const ContainerFormLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 0 auto;
`
const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 24vh;
    justify-content: space-around;
    margin-bottom: 15px;
`
// const ButtonForm=styled.button`
// background-color: rgba(0,0,0,0.8);
// height:70px;
// margin-top:1.5em;
// color:white;
// padding:0.5em;
// font-family: 'Audiowide', cursive;
// border-radius:30px;   
// font-size: 20px;
// `
function LoginPage() {
  useUnProtectedPage()
  const history = useHistory();
  const {form, onChange} = useForm({email: "", password: ""})

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
          {/* <img src={logo} /> */}
          <FormContainer onSubmit={handleSubmission} >
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
                  Login
              </Button>
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
