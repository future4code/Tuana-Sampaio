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
    const [matches, setMatches] = useState(false)
    const [allMatches, setAllMatches] = useState()

    
  
    useEffect(() => {
      getMatches();
    }, []);

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

    
  

    return (
      
      <ListaMatchesContainer> 
        <h1>Tela Matches</h1>
      <li key = {matches.id}> 
        <br/>{matches.photo} 
        <br/> {matches.name} {matches.age} 
         <br/>{matches.bio} </li> 
      </ListaMatchesContainer> 
    )
    
  }
  
  export default TelaMatches;