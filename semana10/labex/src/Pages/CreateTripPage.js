import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"


const ContainerTripPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
`
const Inputs = styled.section`
display: flex;
flex-direction: column;
width: 50%;
row-gap: 30px;
`

const SelectPlanet = styled.select`
    width: 50%;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 50px;
`

function CreateTripPage(params) { 
    const [trips, setTrips] = useState([])
    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [durationInDays, setdurationInDays] = useState("")

    
        const body = { 
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }
        
        function CreateTrip(){
            let newList = [...trips, {name},{planet}, {date}, {description}, {durationInDays}]
            setTrips(newList)
            console.log("viagem criada")
        }
    
        //useEffect para verificar o token
        useEffect(()=>{
        //pega o token salvo no local storage
        const token = localStorage.getItem("token")
        // se token não existe, redireciona para a pg de login
        if(token === null){
            console.log("Não está logado")
            history.push("/login")
        }
    }, [])

    useEffect(( ) => {     
        const token = localStorage.getItem("token")
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tuana-Sampaio-Lovelace/trips", body,
        { headers: {
            auth: token,
            'Content-Type' : 'application/json'
        }
        })
        .then((res) => 
        console.log(res.data))
        .catch((err)=> console.log(err.response.data.message))
    }, [])
          
       
    

    const history = useHistory()

    const goToHomePage = () => {
        history.goBack("/")
    }

   
    return(
        <ContainerTripPage>
            <h1>Criar Nova Viagem</h1>
            <Inputs>
                <input type ="text" value = {name}  placeholder = "Nome" onChange= {(e) => setName(e.target.value)} /> 
                               
            </Inputs>

            <SelectPlanet>
                <option>Escolha um planeta</option>
                <option>Mercúrio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Júpiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>
                <option>Plutão</option>

            </SelectPlanet>

            <Inputs>
                <input type ="date" value = {date}  placeholder = "Escolha uma data" onChange= {(e) => setDate(e.target.value)}/>  
                <input type ="text" value = {description}  placeholder = "Descrição" onChange= {(e) => setDescription(e.target.value)}/> 
                <input type ="text" value = {durationInDays}  placeholder = "Duração em dias" onChange= {(e) => setdurationInDays(e.target.value)}/>               
            </Inputs>

            <Buttons>
                <button onClick = {()=>goToHomePage()}>Voltar</button>
                <button onClick = {()=>CreateTrip()} >Criar Viagem</button>
            </Buttons>

        </ContainerTripPage>
    )
    
}

export default CreateTripPage;