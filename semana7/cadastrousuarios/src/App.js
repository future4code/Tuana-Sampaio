
import React from 'react';
import axios from "axios";
import styled from "styled-components";
import CadastroUsuarios from './components/CadastroUsuarios';
import ListaUsuarios from './components/ListaUsuarios';





  class App extends React.Component{

    state = {
      telaAtual: "cadastro"
    }

    //função para mudar de tela:
    escolheTela = () => { 
      switch (this.state.telaAtual) {
        case "cadastro" :
          return <CadastroUsuarios irParaLista = {this.irParaLista} />  // irParaLista é a prop que pode ter o mesmo nome da função que está dentro das chaves. Dessa forma passamos essas informações para cada componente criado.
        case "lista" :
          return <ListaUsuarios irParaCadastro = {this.irParaCadastro} /> // irParaCadastro é a prop que pode ter o mesmo nome da função que está dentro das chaves. Dessa forma passamos essas informações para cada componente criado.
        default:
          return <div>Página não encontrada</div>  // posso colocar para retornar a tela de cadastro tbm
      } 
    }
  

    //criar uma função para mudar de página:*/

    irParaCadastro = () => {
      this.setState({telaAtual: "cadastro"} ) 
    }

    irParaLista = () => {
      this.setState({telaAtual: "lista"} )
    }


  render(){
        return(
          <div> 
            
              {this.escolheTela()}
          </div>
          
         
       )
  }
}

export default App;