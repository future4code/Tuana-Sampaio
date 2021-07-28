
import React from 'react';
import axios from "axios";
import styled from "styled-components";


const CaixaCadastro = styled.div`
  display: grid;
  justify-content: center;
  
`



const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers : {
    Authorization: "Tuana-Sampaio-Lovelace"
  }
  
}

const urlDelete = " https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"


  class App extends React.Component{

    state = {
      arrayUsuariosCadastrados : [],
     
      inputNameValue : " ",
      inputEmailValue : " "
    }

    componentDidMount() {
      this.createUsers()
      this.getAllUsers() //Faz esta função funcionar. Primeiro monta o componente na tela(carrega a tela) e depois executa essa função e salva no estado. 
      /*this.deleteUsers()*/
    }
    //usa-se arrow function para resolver o this.setstate, sem ela dá problema.
  getAllUsers = () => {
    axios.get(url, headers)
    .then((res) => { // recebemos a resposta e fazemos algo com ela
      this.setState({arrayUsuariosCadastrados: res.data} ) // assim guardamos o dado no estado
      //console.log(res.data)//Caminho para visualizar as propriedades dentro do objeto..se quiser acessar um item específico em um array por ex. pode usar o indice do item entre []. ex lista[1](acessa o item na posição 1 da lista)
    }) 
    .catch((err) => {
      console.log(err.response)
    })
    
  }
  
  
  createUsers = () => {

    const body = {
      
        name: this.state.inputNameValue,
        email: this.state.inputEmailValue
      
    }

    axios.post(url, body, headers)
    .then((res)=>{
        alert("Usuário adicionado com sucesso")
        this.setState({inputNameValue: "", inputEmailValue: ""})
        this.getAllUsers()
    })
    .catch((err)=>{
      alert(err.response.data.message)
    })
  }
 
  /*deleteUsers = () => {
    axios.delete(urlDelete, {
      params: { id}} , headers)
    .then((res)=>{
        alert("Usuário removido com sucesso")
        
    })
    .catch((err)=>{
      alert(err.response.data.message)
    })
  }*/
  
  onChangeUserName = (event) => {
    this.setState( {inputNameValue: event.target.value})
  }

  onChangeUserEmail = (event) => {
    this.setState({inputEmailValue: event.target.value})
  }



  render(){
    const usersList = this.state.arrayUsuariosCadastrados.map((elemento) => {
      return <li key = {elemento.id}> {elemento.name} </li>
    })
    console.log(this.state.arrayUsuariosCadastrados)
    
    return(
      <CaixaCadastro>
        <h4>Nome:</h4>
        <input 
        placeholder = "Digite seu nome"
        value = {this.state.inputNameValue} 
        onChange ={this.onChangeUserName} />
        
        <h4>Email:</h4>
        <input
        placeholder = " Digite seu email"
        value = {this.state.inputEmailValue}
        onChange = { this.onChangeUserEmail}

        />
                
        <button onClick = { this.createUsers}>Salvar</button>
        
        <div>
          <h3>Lista de Usuários cadastrados:</h3>
          {usersList} 
          <button /*onClick = {this.deleteUsers}*/>Remover</button>
        </div>
       
      </CaixaCadastro>
    )
  }
}




export default App;