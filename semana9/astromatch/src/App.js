
import react, { useState } from "react"
import PageMatch from "./components/PageMatch"
import ChoiceMatch from "./components/ChoiceMatch"
function App() {

const [mudaPagina,setMudaPagina] = useState(true)

// const mudarPage = ()=>{
//  setMudaPagina(!mudaPagina)
// }

  return (
    
  <div>
    mudaPagina?<ChoiceMatch />:<PageMatch />
  </div>
    
  );
}

export default App;
