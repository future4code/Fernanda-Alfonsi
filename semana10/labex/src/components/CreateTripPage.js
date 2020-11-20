import React from 'react'
import {useHistory } from 'react-router-dom'
import {useForm} from '../hooks/useForm'
import { useProtectedPage } from "../hooks/useProtectPage";
import styled from 'styled-components'
import axios from "axios";

const ContainerForm= styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  h1{
    color:white;
  }
 `

function CreateTripPage() {
 
  const history=useHistory()
  const goToHome=()=>{
    history.push('/')
  } 
  useProtectedPage();
  
  
  const { form, onChange } = useForm({ name: "", planet: "", date:"", description:"",durationInDays: "" });
  
    const handleInputChange = (event) => {
      const { value, name } = event.target;
  
      onChange(value, name);
    };
  
    const onSubmitForm = (event) => {
      event.preventDefault();
      submitCreateTripForm()
      
    };


  const submitCreateTripForm = () => {
    const axiosConfig = {
      headers: { auth: localStorage.getItem("token") }
  }
  
    axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/fernanda-dumont/trips`,form,axiosConfig)
        .then((response) => {
         alert("Viagem Criada com suceso!")
         console.log("OK", response)
        })
        .catch(err => {
            console.log(err)
        })
    }
  
  
  
  return (
    <div>
      <ContainerForm>
        <h1>Criar Viagem </h1>
        <form onSubmit={onSubmitForm}>
          <input
            value={form.name}
            placeholder={"Nome da Viagem"}
            onChange={handleInputChange}
            name={"name"}
            type={"text"}
            pattern={"(.*[a-z]){5}"}
            required
          />
          <select placeholder={"Planeta"} 
          onChange={handleInputChange} 
          value={form.planet}
          name={"planet"}
          type={"text"}
          required>
            <option  key="Mercúrio" value="Mercúrio">Mercúrio</option>
            <option  key="Vênus" value="Vênus">Vênus</option>
            <option  key="Terra" value="Terra">Terra</option>
            <option  key="Marte" value="Marte">Marte</option>
            <option  key="Júpter" value="Júpter">Júpter</option>
            <option  key="Saturno" value="Saturno">Saturno</option>
            <option  key="Urano" value="Urano">Urano</option>
            <option  key="Netuno" value="Netuno">Netuno</option>
            <option  key="Plutão" value="Plutão">Plutão</option>
          </select>
          
          <input
            value={form.durationInDays}
            placeholder={"Duração em Dias"}
            onChange={handleInputChange}
            name={"durationInDays"}
            type={"number"}
            min="50"
            required
          />
          <input
            value={form.date}
            placeholder={"Data"}
            onChange={handleInputChange}
            name={"date"}
            type={"date"}
            min={"2020-11-19"}
            required
          />
          
           <input
            value={form.description}
            placeholder={"Descrição da Viagem"}
            onChange={handleInputChange}
            name={"description"}
            type={"text"}
            pattern={"(.*[a-z]){30}"}
            required
          />
          <button onClick={onSubmitForm}>Inscrever-se</button>
        </form>
        <div>
          
          <button onClick={goToHome}>Voltar para Home</button>
        </div>
      
      </ContainerForm>
    </div>
  );
}

export default CreateTripPage;
