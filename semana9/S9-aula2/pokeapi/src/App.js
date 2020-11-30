import React from "react"
import './App.css';
import PokeSelect from './components/PokeSelect';
import styled from 'styled-components'

const ContainerGeral= styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:#ffc700;
  margin-bottom: 0;
`
const PokeContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  border:solid 8px #195aab;
  width:400px;
  height:500px;
  background-color:white;
  margin: 25px;
`
const PokeLogo = styled.img`
  width:250px;
  
`
function App() {


  return (
    <ContainerGeral>
        <PokeContainer>
          <header>
            <PokeLogo src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/87044f58-c765-43c5-bc51-8613e3ac7ab1/ddew4m7-c69a2c41-518f-48ca-ba35-8ab1895464e0.png" alt="logo pokemon"/>
          </header>
          <div>
            <PokeSelect />
          </div>
      
        </PokeContainer>
    </ContainerGeral>
    
  );
}

export default App;
