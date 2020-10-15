import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemPerfil from './ImagemPerfil/fernanda.jpeg'
import LogoManas from './ImagemPerfil/logoManas.png'
import Local from './ImagemPerfil/local.png'
import eMail from './ImagemPerfil/eMail.png'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImagemPerfil} 
          nome="Fernanda Garcia Alfonsi" 
          descricao="Oi, eu sou o Fernanda. Sou uma desenvolvedora junior em construção. Tenho como objetivo me recolocar no mercado através do conhecimento adquirido na Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div className="mini-card-container">
      <CardPequeno 
          imagem={Local} 
          titulo="Endereço:" 
          texto="Rua tô amando o React, mas está difícil, 408"
        />
        <CardPequeno 
          imagem={eMail} 
          titulo="e-mail: " 
          texto="ferdev@labenu.com"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem={LogoManas} 
          nome="Manas Idiomas" 
          descricao="Um grupo de mulheres que acreditam que a revolução é feminina e a educação é nossa maior aliada.
          Nossa missão é promover ensino de idiomas de qualidade e acessível com foco em desenvolvimento pessoal e profissional para o fortalecimento do poder feminino para mulheres de todo o país.." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
