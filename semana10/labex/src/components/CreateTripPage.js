import React from 'react'
import { useHistory } from 'react-router-dom';
import { useProtectedPage } from "../hooks/useProtectPage";

function CreateTripPage() {

  const history=useHistory()

  useProtectedPage();
  
  const goToLogin=()=>{
    history.push('/login')
  } 
  return (
    <div>
      <p>CreateTripPage</p>
      <button onClick={goToLogin}>Voltar para Login</button>
    </div>
  );
}

export default CreateTripPage;
