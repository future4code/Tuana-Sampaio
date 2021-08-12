
import Perfil from "./components/Perfil/Perfil";
import styled from "styled-components";
import Header from "./components/Header/Header";
import TelaMatches from "./components/TelaMatches/TelaMatches";
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


const ButtonListaMacthes = styled.li`
  display: flex;
  justify-content: flex-end;
`

const ButtonPerfil = styled.li`
  display: flex;
  justify-content: flex-end;
`

 function App() {
   const [tela, setTela] = useState("TelaMacthes")
    const  [listaMatches, setListaMatches] = useState([])

   const mudaTela = (event) => {
     if(event.target.innerHTML === "TelaMacthes"){
       setTela("TelaMatches")
     }else{
       setTela("Perfil")
     }
   }
   //funcão de adicionar à lista de matches
   const addPerfil = (perfil) => {
    const newListaMatches = [...listaMatches, perfil]
    setListaMatches(newListaMatches)
    alert("perfil adicionado ")
   }

   
   
  //fazer a função de renderizar as telas e enviar por props para o header usar no botao
  const renderizarTela = () => {
    if(tela === "TelaMatches"){
      return <TelaMatches addPerfil = {addPerfil}/>
    }else{
      return <Perfil addPerfil = {addPerfil} />
    }
  }



  return (
    //Passar por props para o componente Perfil a imagem, nome e descrição do usuário.
    <TelaInicialContainer>

      <Header
      />

      <ButtonListaMacthes onClick={mudaTela}>TelaMacthes</ButtonListaMacthes>
      <ButtonPerfil onClick={mudaTela}>Perfil</ButtonPerfil>
      
     
       
      
      {renderizarTela()}
    </TelaInicialContainer>
  );
}

 
 export default App;