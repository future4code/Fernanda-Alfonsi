import React from 'react'
import { useHistory } from 'react-router-dom'
import {useForm} from '../hooks/useForm'
import styled from 'styled-components'


const ContainerForm= styled.div`
  display:flex;
  flex-direction: column;
  /* justify-content:space-around; */
  h1{
    color:white;
  }
 `

function ApplicationFormPage() {
  const history=useHistory()

  const goToHome=()=>{
    history.push('/')
  } 

  
    const { form, onChange } = useForm({ name: "", age: "", email: "" });
  
    const handleInputChange = (event) => {
      const { value, name } = event.target;
  
      onChange(value, name);
    };
  
    const onSubmitForm = (event) => {
      event.preventDefault();
      console.log(form);
    };
  
    return (
      <ContainerForm>
        <h1>Formulário de Inscrição</h1>
        <form onSubmit={onSubmitForm}>
          <input
            value={form.name}
            placeholder={"Nome"}
            onChange={handleInputChange}
            name={"name"}
            type={"text"}
            pattern={"[A-Za-z]{3,}"}
            required
          />
          <input
            value={form.age}
            placeholder={"Idade"}
            onChange={handleInputChange}
            name={"age"}
            type={"number"}
            min="18"
            required
          />
          <input
            value={form.email}
            placeholder={"Profissão"}
            onChange={handleInputChange}
            name={"profession"}
            type={"text"}
            required
          />
          <input
            value={form.email}
            placeholder={"País"}
            onChange={handleInputChange}
            name={"country"}
            type={"text"}
            required
          />
           
           <input
            value={form.email}
            placeholder={"Por que é um bom candidato?"}
            onChange={handleInputChange}
            name={"country"}
            type={"text"}
            required
          />
          <button>Inscrever-se</button>
        </form>
        <div>
          
          <button onClick={goToHome}>Voltar para Home</button>
        </div>
      
      </ContainerForm>
    
  
  
  
    
  );
}

export default ApplicationFormPage;
