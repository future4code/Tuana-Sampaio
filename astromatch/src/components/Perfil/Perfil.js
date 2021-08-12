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
    const [choice, setChoice] = useState("false")
    const [clear, setClear] = useState("")
    //bater na API e buscar os perfis 
    
    useEffect(() => {
        getProfileToChoose();
      }, []);//DidMount renderiza na tela o perfil assim que o componente é montado.
        
      // Bate na API e pega todos os perfis:
    const getProfileToChoose = (user) => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${user} /person`)
        .then((res)=>{
         //console.log(res.data.profile)
         setProfile(res.data.profile)
        
       }).catch((err)=>{
           console.log(err.response)
       })
    }

    useEffect(() => {
        choosePerson();
      }, []); 
    
    //Função para escolher um perfil
    const choosePerson = (id) => {
        const body = {
            id: profile.id,
	        choice: false
        }
        const headers = {
            headers: {
                ContentType: "application/json"
            }
         }

        axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${id} /choose-person`, body)
        .then((res)=>{
            console.log(res.data)
            setChoice(res.data)
           addMatchProfile()
        }).catch((err)=>{
            console.log(err.response)
        })
    }


            const addMatchProfile = () => {
            if(choice === "true"){
                setChoice("true")
            }else{
                clearPerson()
            }
        } 
   
        useEffect(() => {
            clearPerson();
          }, []);    

   const clearPerson = () => {
    const headers = {
        headers: {
            ContentType: "application/json"
        }
     }
    axios
    .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tuana/clear`, headers)
    .then((res)=>{
        console.log(res.data)
        setClear(res.data)

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
                 <button onClick = {clearPerson} >X</button>
                <button onClick={() => props.addPerfil(props.profile) }>♥️</button> 
                
            </ButtonsContainer>


        
        </PerfilContainer>
    )
}

