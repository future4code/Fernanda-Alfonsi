
import react, { useState } from "react"
import PageMatch from "./components/PageMatch"
import ChoiceMatch from "./components/ChoiceMatch"
import styled from "styled-components"

const AppContaineir = styled.div`
display: flex;
flex-direction:column;
align-items:center;
background-image:url("https://super.abril.com.br/wp-content/uploads/2018/07/istock-524554638.jpg");
`
function App() {

const [mudaPagina,setMudaPagina] = useState(true)

const onClickChangePage = ()=>{
 setMudaPagina(!mudaPagina)
}

const mudarPagina=  mudaPagina?(<ChoiceMatch onClickChangePage={onClickChangePage}/>):(<PageMatch onClickChangePage={onClickChangePage} />)
  return (
   
  <AppContaineir>
   {mudarPagina}
  </AppContaineir>
    
  );
}

export default App;
