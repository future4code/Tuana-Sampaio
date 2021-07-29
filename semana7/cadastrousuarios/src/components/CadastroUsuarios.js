import React from 'react';
import axios from "axios";
import styled from "styled-components";


const TelaCadastro = styled.div `
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 400px;
    border: 2px solid black;
    margin: 10px;
    font-style: italic;
		font-weight: bold;
		font-size: 20px;
		font-family: arial, sans-serif;
            
`
const Container = styled.div`
    display: flex;
    align-items: center;
`


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
    headers : {
      Authorization: "Tuana-Sampaio-Lovelace"
    }
    
  }

class CadastroUsuarios extends React.Component{
    
    state = {
        inputNameValue : " ",
        inputEmailValue : " "
    }
    
    componentDidMount() {
        //this.createUsers()
    }


    createUsers = () => {

        const body = {
          
            name: this.state.inputNameValue,
            email: this.state.inputEmailValue
          
        }
    
        axios.post(url, body, headers)
        .then((res)=>{
            alert("Usuário adicionado com sucesso")
            this.setState({inputNameValue: "", inputEmailValue: ""}) //apagar os inputs depois de cadastrar
            
        })
        .catch((err)=>{
          alert("Digite nome e email")
        })
      }


      onChangeUserName = (event) => {
        this.setState( {inputNameValue: event.target.value})
      }
    
      onChangeUserEmail = (event) => {
        this.setState({inputEmailValue: event.target.value})
      }

    render()
    {
        
        return( 
        <div>

        
        <TelaCadastro>
            <h1>Cadastro</h1>
    
        <h4>Nome:</h4>
        <input 
        placeholder = "Digite seu nome"
        value = {this.state.inputNameValue} 
        onChange ={this.onChangeUserName}
        />
        
        <h4>Email:</h4>
        <input
        placeholder = " Digite seu email"
        value = {this.state.inputEmailValue}
        onChange = { this.onChangeUserEmail}
        />
                
        <button onClick = {this.createUsers}>Salvar</button>
        
        <button onClick = {this.props.irParaLista} >Ir para a tela de lista de usuários cadastrados</button>
        
        </TelaCadastro>

        </div>
     ) 
    }
}

export default CadastroUsuarios;