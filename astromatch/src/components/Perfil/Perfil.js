import { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios";


const PerfilContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
`

const UserPhoto = styled.img`
    height: 230px;
    width: 250px;
    margin-right: 20px;
    border-radius: 20%;

`
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  
  
`


export default function Perfil(props){
    //vou ter q ter um estado para armazenar os perfis na api get profile to choose
    const [profile, setProfile] = useState({})
    //const [profileId, setProfileId] = useState("true")
    
    //bater na API e buscar os perfis 
    
    useEffect(() => {
        getProfileToChoose();
      }, []);//DidMount renderiza na tela o perfil assim que o componente é montado.
        
      
    const getProfileToChoose = (user) => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user} /person`)
        .then((res)=>{
         //console.log(res.data.profile)
         setProfile(res.data.profile)
         choosePerson()
       }).catch((err)=>{
           console.log(err.response)
       })
    }

    

   

    const choosePerson = (person) => {
        const body = {
            id: " ",
	        choice: false
        }
        const headers = {
            headers: {
                ContentType: "application/json"
            }
         }

        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${person} /choose-person`, body, headers)
        .then((res)=>{
            console.log(res.data)
            
        }).catch((err)=>{
            console.log(err.response)
        })
    }

   
    // retornar os dados que eu quero imagem,nome e descrição
    //renderizar os perfis com map
    // renderizar um perfil só quando mudar devo usar usereffet update?
    return(
        <PerfilContainer>
           
             <UserPhoto src= {profile.photo} alt = "foto do usuário" />
             <p> {profile.name}, {profile.age} anos</p>   
             
             <p> 
                {profile.bio} 
            </p>
            
        
            <ButtonsContainer>
                 <button >X</button>
                <button onClick={() => props.addPerfil(props.profile) }>♥️</button> 
            </ButtonsContainer>


        
        </PerfilContainer>
    )
}

