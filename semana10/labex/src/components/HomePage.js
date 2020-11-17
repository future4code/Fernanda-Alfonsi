import React from 'react'
import { useHistory } from 'react-router-dom';


function HomePage() {

  const history=useHistory()

  const goToLogin=()=>{
    history.push('/login')
  }

  const goToApplication=()=>{
    history.push('/applicationForm')
  }
  return (
    <div>
      <p>HomePage</p>
      <button onClick={goToLogin}> ir  para login</button>
      <button onClick={goToApplication}> ir  para formulário de inscrição</button>
    </div>
  );
}

export default HomePage;
