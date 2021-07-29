import React from 'react';
import axios from "axios"
import styled from "styled-components"

const Container = styled.div `
background-color: aliceblue;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: 'Courier New', Courier, monospace;
font-style: oblique;
font-size: 20px;
`


class App extends React.Component{
  state = {
    activities: {}
  }

  
  

  getAllActivities = () => {
    axios.get("http://www.boredapi.com/api/activity/")
    .then((res) => {
      console.log(res.data)
      this.setState({activities: res.data})
    })
    .catch((err)=> {
      console.log(err.response)
    })
  }
  render(){
        
    return (
      <Container>
        <h2>Quer sugestões de atividades para fazer nas horas vagas??</h2>
        <button onClick = {this.getAllActivities}>Aperte aqui</button>
        <h2>Nossa sugestão de atividade para você:</h2>
        <hr/>
        <p>Nome: {this.state.activities.activity} </p>
        <p>Tipo:{this.state.activities.type}</p>
        <p>Id:{this.state.activities. key}</p>
        <p>Participantes: {this.state.activities.participants}</p>
        <p>Preço: ${this.state.activities.price} </p>
        <p>Acessibilidade: {this.state.activities.accessibility} </p>

        <h3>Enjoy!!</h3>
      </Container>
    )
  }
  
}

export default App;
