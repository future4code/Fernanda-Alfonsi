import React, { useContext } from 'react'
import logo from "../img/logo.png"
import { goToFeed, goToLogin } from "../router/cordinator"
import { useHistory } from 'react-router-dom';
import styled from "styled-components"
import LoggedContext from '../context/LoggedContext'

const NavBarContainer = styled.div`
   display:flex;
   justify-content:space-between;
   width:100vw;
   background-color:white;
   align-items: center;
    img{
        height:80px;
    }
`
const ButtonEffect=styled.button`
  border-radius:10%;
  margin-right:40px;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #1f4863;

::before {
  content: '';
  border-radius:10%;
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e7413e;
  transform-origin: center left;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

:hover {
  cursor: pointer;
}

:hover::before {
  transform-origin: center right;
  transform: scaleX(1);
}
`
function NavBar() {

  const history = useHistory()
    const loggedContext = useContext(LoggedContext)


    const handleLoginOrLogoutClick = () => {

      const token = localStorage.getItem("token")

      if (token) {
        localStorage.removeItem("token")
        loggedContext.setLogged(false)
      }

      goToLogin(history)
    }
  
    



  return (
      <NavBarContainer>
          <img src={logo} alt={'logotipo'} onClick={()=>goToFeed(history)}/>
          
              <ButtonEffect  onClick={handleLoginOrLogoutClick}>{loggedContext.logged ? "Logout" : "Login"}</ButtonEffect>
            
      </NavBarContainer>
  
       
  );
}

export default NavBar;
