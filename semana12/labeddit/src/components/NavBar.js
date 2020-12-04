import React from 'react'
import logo from "../img/logo.png"
import { goToLogin } from "../router/cordinator"
import { useHistory } from 'react-router-dom';
import styled from "styled-components"

const NavBarContainer = styled.div`
   display:flex;
   justify-content:space-between;
   width:100vw;
   background-color:white;
   align-items: center;
    img{
        height:100px;
    }
    /* button{
        height:60px;
        margin-right:40px;
        border-radius:20%;
        background-color:#1f4863;
        color:white;
        border:none;
        
    } */
`
const ButtonEffect=styled.button`

  border-radius:20%;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);


::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc2f70;
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

const history = useHistory();

  return (
      <NavBarContainer>
          <img src={logo} alt={'logotipo'}/>
          
              <ButtonEffect>Fazer Login</ButtonEffect>
            
      </NavBarContainer>
  
       
  );
}

export default NavBar;
