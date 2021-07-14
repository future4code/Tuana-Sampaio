import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = "https://media-exp1.licdn.com/dms/image/C4D03AQGur84HrEm-xA/profile-displayphoto-shrink_200_200/0/1516930321649?e=1631750400&v=beta&t=Smde9wSEtzl5B5agnOAZ8WoKI96dxyyab7hBivrgjvk"
          nome="Tuana Sampaio" 
          descricao=" Sou uma apaixonada por novos conceitos. Adoro aprender em diversas áreas e acredito que um bom profissional é aquele
          que possui um grande arcabouço de informações e vivências que vão auxiliá-lo na resolução criativa de problemas."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

      </div>
           
      <div className="page-section-container">
      
      <CardPequeno
          imagem2= "http://maisaromas.com.br/wp-content/uploads/2017/04/Icone-email.png"
          email = "tuana@hotmail.com"
        />  


      </div>

      <div className="page-section-container">

      <CardPequeno
          imagem2= "https://i.pinimg.com/236x/be/f1/e0/bef1e0e6792862fddd36e004c46aa134.jpg"
          endereco = "Rua inspetor Malafaia"
        />  

      </div>

      
          
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQExqnMHB_Ymug/company-logo_200_200/0/1519917625506?e=1634169600&v=beta&t=OD0Y9g08VxOKAUlLJnv6DcH7DGHxSl4XTMgmGiZNly8" 
          nome="Hotel Sheraton Reserva do Paiva" 
          descricao="Agente de serviços aos hóspedes" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFnS9nJbIIXvA/company-logo_200_200/0/1626088412171?e=1634169600&v=beta&t=LgNjELWYBZu8nHaFwFNz30DeDdvre_yaNKApVhiIKp0" 
          nome="Hotel Ibis Recife Aeroporto" 
          descricao="Atendente de hospedagem
          Full-time
          Mar 2016 – Jul 2018
          " 
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
