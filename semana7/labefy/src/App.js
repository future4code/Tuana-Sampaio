import React from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "./components/Header";
import CreatePlaylist from "./components/CreatePlaylist";
import InfoPlaylist from "./components/InfoPlaylist";


const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`



class App extends React.Component{

  state = {
    telaAtual : "CreatePlaylist"
    
  }

  mudarTela = (tela) => {
    this.setState( {telaAtual: tela})
  }
  render() {

    const renderizaTelaAtual = () => {
      if(this.state.telaAtual === "CreatePlaylist") {
        return <CreatePlaylist/>
      }else if(this.state.telaAtual === "InfoPlaylist") {
        return <InfoPlaylist/>
    } 
      
    }
        
    return (
     
      <AppContainer>

        <Header
         mudarTela = {this.mudarTela} //passando a informação(função) por props para o componente Header
        />            
        {renderizaTelaAtual()}
        
        </AppContainer>
      
     
    );
  }
  
}

export default App;
