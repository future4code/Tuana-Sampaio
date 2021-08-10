import styled from 'styled-components';
import React, { useState } from 'react'

const ListaMatchesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`





function TelaMatch() {
    const [matches, setMatches] = useState([
        {id: "71gMbZs2txS9LDvGK5Ew",
        age: 26,
        name: "Anitta,",
        photo: "https://images.outgo.com.br/clients/1/events/2923/Anitta-Perfil-4-1.png",
        bio: "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."}
    ])

    return (
      <ListaMatchesContainer>
          <h1>Tela match:</h1>
          {matches.map(item => (
              <li key = {item.id}>
                <br/>{item.photo} 
                <br/> {item.name} {item.age} 
                 <br/>{item.bio} </li> 
          ))}
          
      </ListaMatchesContainer>
    );
  }
  
  export default TelaMatch;