import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"


const ContainerTripPage = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: 40px;
`
const Inputs = styled.section`
display: flex;
flex-direction: column;
//width: 50%;
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
    const history = useHistory()
    const [form, setForm] = useState({name:"", planet:"", date:"", description:"", durationInDays:""})
               
        
    
        //useEffect para verificar o token
        useEffect(()=>{
        //pega o token salvo no local storage
        const token = localStorage.getItem("token")
        // se token não existe, redireciona para a pg de login
        if(token === null){
            console.log("Não está logado")
            history.push("/login")
        }
    }, [form])
    
    function CreateTrip(event){
        event.preventDefault()
        const token = localStorage.getItem("token")
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tuana-Sampaio-Lovelace/trips", form,
        { 
            headers: {
            auth: token,
            'Content-Type' : 'application/json'
        }
        })
        .then((res) => 
        console.log(res.data))
        .catch((err)=> console.log(err.response))

    }

    
     // função onChange unificada     
    const onChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    

    

    const goToHomePage = () => {
        history.goBack("/")
    }

   
    return(
        <ContainerTripPage>
             <button onClick = {()=>goToHomePage()}>Voltar</button>
            <h1>Criar Nova Viagem</h1>
            
            <form onSubmit = {CreateTrip}> 
            
            
                <input
                type ="text" required
                name = "name" 
                pattern = {"^.{5,} "}
                title = {"Deve conter no mínimo 5 letras"}
                value = {form.name}  
                placeholder = "Nome" 
                onChange= {onChange} /> 
                                  
           

            

            <SelectPlanet>
                <option name = "planet" value = {form.planet}>Escolha um planeta</option>
                <option value = "Mercúrio">Mercúrio</option>
                <option value = "Vênus">Vênus</option>
                <option value = "Terra">Terra</option>
                <option value = "Marte">Marte</option>
                <option value = "Júpiter">Júpiter</option>
                <option value = "Saturno">Saturno</option>
                <option value = "Urano">Urano</option>
                <option value = "Netuno">Netuno</option>
                <option value = "Plutão">Plutão</option>

            </SelectPlanet>
 
            
                <Inputs>
                    <input name = "date" type ="date" required value = {form.date}  placeholder = "Escolha uma data" onChange= {onChange}/>  
                    <input name = "description" type ="text" required pattern = {"^.{50, } "} title = {"Seu descrição deve conter no mínimo 50 caracteres"} value = {form.description}  placeholder = "Descrição" onChange= {onChange}/> 
                    <input name = "durationInDays" type ="text" required pattern = {"^.{50, } "} title = {"Mínimo de 50 dias"} value = {form.durationInDays}  placeholder = "Duração em dias" onChange= {onChange}/>               
                </Inputs>
                <button>Criar Viagem</button>
            </form>

            <Buttons>
               
                
            </Buttons>

        </ContainerTripPage>
    )
    
}

export default CreateTripPage;