import React from 'react'
import { useHistory } from 'react-router-dom'

function ApplicationFormPage() {
  const history=useHistory()

  const goToHome=()=>{
    history.push('/')
  } 

  return (
    <div>
      <p>ApplicationFormPage</p>
      <button onClick={goToHome}>Voltar para Home</button>
    </div>
  );
}

export default ApplicationFormPage;
