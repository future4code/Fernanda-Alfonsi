import React from 'react'
import { useParams,useHistory } from 'react-router-dom'
import {useForm} from '../hooks/useForm'
import styled from 'styled-components'
import axios from "axios";


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

  const { id } = useParams()


  const submitForm = () => {
    
    axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips/${id}/apply`,form)
        .then((response) => {
         alert("Obrigada por se inscrver, estamos na torcida!")
         console.log("OK", response)
          
            console.log(response)
        })
        .catch(e => {
            console.log(e)
        })
    }
  
    const { form, onChange } = useForm({ name: "", age: "", profession: "",country:"",application:"" });
  
    const handleInputChange = (event) => {
      const { value, name } = event.target;
  
      onChange(value, name);
    };
  
    const onSubmitForm = (event) => {
      event.preventDefault();
      submitForm()
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
            pattern={"[A-Za-z /s]{3,}"}
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
            value={form.profession}
            placeholder={"Profissão"}
            onChange={handleInputChange}
            name={"profession"}
            type={"text"}
            pattern={"[A-Za-z /s]{10,}"}
            required
          />
          <select placeholder={"País"} 
          onChange={handleInputChange} 
          value={form.country}
          name={"country"}
          type={"text"}
          required>
            <option  key="Argentina" value="Argentina">Argentina</option>
            <option  key="Brasil" value="Brasil">Brasil</option>
            <option  key="China" value="China">China</option>
            <option  key="Cuba" value="Cuba">Cuba</option>
            <option  key="Espanha" value="Espanha">Espanha</option>
            <option  key="Estados Unidos" value="Estados Unidos">Estados Unidos</option>
            <option  key="Japão" value="Japão">Japão</option>
            <option  key="México" value="México">México</option>
            <option  key="Rússia" value="Rússia">Rússia</option>
          </select>
          
           <input
            value={form.pplication}
            placeholder={"Por que é um bom candidato?"}
            onChange={handleInputChange}
            name={"application"}
            type={"text"}
            pattern={"[A-Z a-z /s]{30,}"}
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
