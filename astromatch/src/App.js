
import Perfil from "./components/Perfil/Perfil";
import styled from "styled-components";
import Header from "./components/Header/Header";
import TelaMatch from "./components/TelaMatchs/TelaMatchs";
import React, { useState } from 'react'


const TelaInicialContainer = styled.div`
   display: flex;
   flex-direction: column;
   border: 1px solid black;
   margin-top: 20px;
   margin-left: 150px;
   margin-right: 150px;
   height: 70vh;
   justify-content:space-around;
   padding: 50px 50px 50px 50px;
   border-radius: 50px;

`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  
  
`

 function App() {
    
  //fazer a função de renderizar as telas e enviar por props para o header usar no botao
  
  return (
    //Passar por props para o componente Perfil a imagem, nome e descrição do usuário.
    <TelaInicialContainer>
      
      <Header
      />
      <Perfil
      imagemUsuario = {"https://blog.unyleya.edu.br/wp-content/uploads/2017/12/saiba-como-a-educacao-ajuda-voce-a-ser-uma-pessoa-melhor.jpeg"}
      nome = {"Ana"}
      descricao = {"descrição usuário"}    
      />
      <ButtonsContainer>
        <button>X</button>
        <button>♥️</button>
      </ButtonsContainer>
    </TelaInicialContainer>
  );
}

 
 export default App;