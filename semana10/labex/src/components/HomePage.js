import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import spaceship from '../img/spaceship-3827533_1920.jpg'

const HomeContainer=styled.div`

p{
  color:white;
  font-size: 100px;
}
`
const ButtonHome=styled.button`
background-color: black;
color:white;
padding:1em;
`

function HomePage() {

  const history=useHistory()

  const goToLogin=()=>{
    history.push('/login')
  }

  const goToApplication=()=>{
    history.push('listTrips')
  }
  return (
    < HomeContainer>
      <p>LabeX</p>
      <ButtonHome onClick={goToLogin}> Fazer Login</ButtonHome>
      <ButtonHome onClick={goToApplication}> viaje com a gente</ButtonHome>
    </ HomeContainer>
  
    
  );
}

export default HomePage;
