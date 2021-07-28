import React from 'react';
import axios from "axios";
import styled from "styled-components";

const CaixaCadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    align-self: flex-stretch;
    grid-row-gap: 20px;
    font-style: italic;
		font-weight: bold;
		font-size: 20px;
		font-family: arial, sans-serif;
      
`



const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers : {
    Authorization: "Tuana-Sampaio-Lovelace"
  }
  
}


class ListaUsuarios extends React.Component {

    state = {
        arrayUsuariosCadastrados : [],
       
      }

      componentDidMount() {
         this.getAllUsers() //Faz esta função funcionar. Primeiro monta o componente na tela(carrega a tela) e depois executa essa função e salva no estado. 
        // this.deleteUsers()
         
      }
      //usa-se arrow function para resolver o this.setstate, sem ela dá problema.
    
      getAllUsers = () => {
      axios.get(url, headers)
      .then((res) => { // recebemos a resposta e fazemos algo com ela
        this.setState({arrayUsuariosCadastrados: res.data} ) // assim guardamos o dado no estado
        //console.log(res.data)//Caminho para visualizar as propriedades dentro do objeto..se quiser acessar um item específico em um array por ex. pode usar o indice do item entre []. ex lista[1](acessa o item na posição 1 da lista)
      }) 
      .catch((err) => {
        alert("Ocorreu um problema")
      })
      
    }


    deleteUsers = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
        
        .then((res)=>{
            alert("Usuário removido com sucesso")
            this.getAllUsers()   
        })
        .catch((err)=>{
          alert("err.response.data.message")
        })
      }
      


    render(){
        const usersList = this.state.arrayUsuariosCadastrados.map((user) => {
      return <div>   
        <li key = {user.id} > {user.name} </li>
        <button onClick = {() => this.deleteUsers (user.id) }>Remover</button></div>
      
    })
    //console.log(this.state.arrayUsuariosCadastrados)
    console.log(usersList)
    
    
        return(
            <CaixaCadastro>
 
          <h1> Usuários cadastrados:</h1>
          
          
          {usersList} 
          
          <button onClick = {this.props.irParaCadastro} >Ir para a tela de cadastro de usuários </button>
          
            
            </CaixaCadastro>
        )
    }
}



export default ListaUsuarios;