
import React from 'react';
import axios from "axios";
import styled from "styled-components";



const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers : {
    Authorization: "Tuana-Sampaio-Lovelace"
  }
}

  class App extends React.Component{

    componentDidMount() {
      this.getAllUsers()
    }

  getAllUsers = () => {
    axios.get(url, headers)
    .then((res) => {
      console.log(res)
    }) 
    .catch((err) => {
      console.log(err.response)
    })
    
  }

  
  
  render() {
    
    return(
      <div>

      </div>
    )
  }
}



export default App;