import styled from "styled-components"
import react from "react"
// import coracaoMatch from "../components/img/"



const AppContaineir = styled.div`

display: flex;
flex-direction:column;
align-items:center;
background-color: gray;
`
const AppDisplay = styled.div`
display: flex;
flex-direction:column;
align-items:center;
background-color:white;
margin:15px;
border: solid;
width:400px;
height:600px;
`
const Imagem = styled.img`
width: 250px;
height:350px;
/* border-radius:50%; */
margin:25px;
border:solid;
`
const Botoes = styled.button`
width: 50px;
height:50px;
border-radius:50%;
margin:2px;
border:solid;
`
const Header = styled.header`
display: flex;
justify-content:center;
`

function ChoiceMatch(props) {
  return (
  <AppContaineir>
    
    <AppDisplay>
    <Header>
        <h3>Astromatch</h3>
        <button onClick={''}>Match</button>
        {/* <img src={coracaoMatch}  alt="icone para página de match" onClick={""}/> */}
    </Header>
    <hr/>
      <Imagem src='https://img.elo7.com.br/product/main/1F61333/adesivo-decorativo-parede-buraco-tam-grande-qualquer-imagem.jpg' alt="imagm qualquer"/>
      <p>nome do boy, idade</p>
      <p>descrição</p>
      

    <div>
      < Botoes>x</ Botoes>
      < Botoes>o</ Botoes>
    </div>
    </AppDisplay>
    
  </AppContaineir>
    
  );
}

export default ChoiceMatch;
