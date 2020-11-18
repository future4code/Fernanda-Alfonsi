import React from 'react'
import Router from './router/Router'
import styled from 'styled-components'
import spaceship from './img/spaceship-3827533_1920.jpg'

const AppContainer=styled.div`
bottom: 0px;
margin:0px;
width:100vw;
height:100vh;
background-image: url(${spaceship});
background-repeat: no-repeat;
background-size:cover;

`



function App() {
  return (
    <AppContainer>
        <Router/>
    </AppContainer>
       
  );
}

export default App;
