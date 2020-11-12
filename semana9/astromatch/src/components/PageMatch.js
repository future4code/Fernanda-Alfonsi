import styled from "styled-components"
import voltar from "../img/voltar.png"
import titulo from "../img/título.png"


const BtPageChoice = styled.img`
width: 50px;
height:50px;
border-radius:50%;
margin:2px;
`

const AppDisplay = styled.div`
background-color:white;
margin:30px;
border-radius:10%;
width:400px;
height:600px;
`
const MatchDisplay = styled.div`
display: flex;

`
const Titulo = styled.img`
width: 200px;
margin-left: 40px;
margin-right:80px;
`
const Header = styled.div`

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

function PageMatch(props) {
  return (

    
    <AppDisplay>
      <Header>
        
        <BtPageChoice src={voltar} onClick={props.onClickChangePage}/>
        <Titulo src={titulo} alt="Astromatch"/>
        
      </Header>
      <hr/>
      <MatchDisplay>
        <Imagem src='https://zap.aeiou.pt/wp-content/uploads/2017/03/72480f6a43e88adf7e60321adcf856b2-783x450.jpeg' alt="imagm qualquer"/>
        <p>nome do boy, idade</p>
      </MatchDisplay>
      <MatchDisplay>
        <Imagem src='https://zap.aeiou.pt/wp-content/uploads/2017/03/72480f6a43e88adf7e60321adcf856b2-783x450.jpeg' alt="imagm qualquer"/>
        <p>nome do boy, idade</p>
      </MatchDisplay>
      <MatchDisplay>
        <Imagem src='https://zap.aeiou.pt/wp-content/uploads/2017/03/72480f6a43e88adf7e60321adcf856b2-783x450.jpeg' alt="imagm qualquer"/>
        <p>nome do boy, idade</p>
      </MatchDisplay>
      <MatchDisplay>
        <Imagem src='https://zap.aeiou.pt/wp-content/uploads/2017/03/72480f6a43e88adf7e60321adcf856b2-783x450.jpeg' alt="imagm qualquer"/>
        <p>nome do boy, idade</p>
      </MatchDisplay>
    </AppDisplay>
    
  
    
  );
}

export default PageMatch;
