import React, { useState } from 'react'
import Router from './router/Router'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import LoggedContext from './context/LoggedContext'
import { BrowserRouter} from "react-router-dom"

const AppContainer=styled.div`
bottom: 0px;
margin:0px;
width:100vw;
height:100%;
/* background-image: url('');
background-repeat: no-repeat;
background-size:cover; */
background-color:#e6e4da;
`


function App() {
  const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)

  const loggedContext = {logged, setLogged}
  return (
    <BrowserRouter>
     <LoggedContext.Provider value={loggedContext} >
      <NavBar/>
      <AppContainer>
          <Router/>
      </AppContainer>
      </LoggedContext.Provider>
    </BrowserRouter> 
  );
}

export default App;
