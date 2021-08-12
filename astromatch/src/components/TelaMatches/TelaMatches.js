import styled from 'styled-components';
import { useState, useEffect } from 'react'
import axios from 'axios';

const ListaMatchesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
`





function TelaMatches() {
    const [matches, setMatches] = useState({})
    const [allMatches, setAllMatches] = useState([])

    
  
    useEffect(() => {
      getMatches();
    }, [matches]);

    const getMatches = (perfil) => {
      axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${perfil}/matches`)
      .then((res)=>{
        //console.log(res.data.matches)
        
        setMatches(res.data.matches)
      }).catch((err)=>{
        console.log(err.response)
      })
    }



    const allProfileMatches = allMatches.map((matches) => {
      // Essa função está colocando cada match de perfil num componente
      // e guardando esses componentes na variável allProfileMatches
      return <li key={matches.id}>
        <br/> {matches.name}, {matches.age} 
        <br/> {matches.photo} 
        <br/> {matches.bio} </li>;
    });
  
    
    return (
      
      <ListaMatchesContainer> 
        <h1>Tela Matches</h1>
        {allProfileMatches }                         
        
         
      </ListaMatchesContainer> 
    )
    
  }
  
  export default TelaMatches;