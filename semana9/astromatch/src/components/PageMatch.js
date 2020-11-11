import styled from "styled-components"
import react from "react"
// import coracaoMatch from "../components/img/coracaoMatch.svg"



const AppContaineir = styled.div`

display: flex;
flex-direction:column;
align-items:center;
background-color: gray;
`
const AppDisplay = styled.div`
background-color:white;
margin:15px;
border: solid;
width:400px;
height:600px;
`
const MatchDisplay = styled.div`
display: flex;

`
const Header = styled.div`
display: flex;
justify-content:center;
`
const Imagem = styled.img`
width: 50px;
height:50px;
border-radius:50%;
margin:5px;
border:none;
`
const Button = styled.button`
margin-left: 50px;
`

function PageMatch() {
  return (
  <AppContaineir>
    
    <AppDisplay>
      <Header>
        <h3>Astromatch</h3>
        <Button>volta</Button>
        {/* <img src='coracaoMatch'  alt="icone para página de match" onClick={""}/> */}
      </Header>
      <hr/>
      <MatchDisplay>
        <Imagem src='https://img.elo7.com.br/product/main/1F61333/adesivo-decorativo-parede-buraco-tam-grande-qualquer-imagem.jpg' alt="imagm qualquer"/>
        <p>nome do boy, idade</p>
      </MatchDisplay>
    </AppDisplay>
    
  </AppContaineir>
    
  );
}

export default PageMatch;
