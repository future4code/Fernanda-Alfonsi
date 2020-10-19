import React from 'react';

class Etapa1 extends React.Component {
    render() {
      
      
      return (
          <div>
             <h3>ETAPA 1 - DADOS GERAIS</h3> 
             <div>
                 <p>1. Qual seu nome?</p>
                 <input value></input>
             </div>
             <div>
                 <p>2. Qual sua Idade?</p>
                 <input value></input>
             </div>
             <div>
                 <p>3. Qual seu e-mail?</p>
                 <input value></input>
             </div>
             <div>
                 <p>4. Qual sua escolaridade?</p>
                 <select>
                     <option value = "Ensino médio incompleto">Ensino médio incompleto</option>
                     <option value = "Ensino médio completo">Ensino médio completo</option>
                     <option value = "Ensino superior incompleto">Ensino superior incompleto</option>
                     <option value = "Ensino superior completo">Ensino superior completo</option>
                 </select>
             </div>
          </div>
      );

                  
    }
}
  
export default Etapa1;


 