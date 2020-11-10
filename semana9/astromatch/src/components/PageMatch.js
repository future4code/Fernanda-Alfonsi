import styled from "styled-components"



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
const Imagem = styled.img`
width: 100px;
height:100px;
border-radius:50%;
margin:25px;
`

function PageMatch() {
  return (
  <AppContaineir>
    <AppDisplay>
      <header>
        <h3>Astromatch</h3>
        <img src=""  alt="icone para página de match" onClick={""}/>
      </header>
      <Imagem src="https://image.freepik.com/fotos-gratis/via-lactea_1401-347.jpg" alt="imagm qualquer"/>
      <p>oi</p>
    </AppDisplay>
    
  </AppContaineir>
    
  );
}

export default PageMatch;
