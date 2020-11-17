import React from 'react'
import { useHistory } from 'react-router-dom';

function LoginPage() {

  const history=useHistory()

  const goToCreateTrip=()=>{
    history.push('/createTrip')
  }

  const goToTripDetails=()=>{
    history.push('/tripDetails')
  }
  
  const goToListTrip=()=>{
    history.push('/listTrip')
  }
  return (
    <div>
      <p>LoginPage</p>
      <button onClick={goToCreateTrip}>Criar Viagem</button>
      <button onClick={goToTripDetails}>Detalhes das Viagens</button>
      <button onClick={goToListTrip}>Listar Viagens</button>
      
    </div>
  );
}

export default LoginPage;
