import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
const ContainerAdmPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
`

const Buttons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
column-gap: 50px;
`
const NameTripList = styled.ul`
    display: flex;
    justify-content: space-between;
    border: 1px solid #000;
    width: 30%;
    height: 7vh;
    align-items: center;
    padding: 18px;
    padding-right: 5px;
`


function AdminHomePage (props) {
    const [tripsList, setTripsList] = useState([])
    const history = useHistory()

    //se tiver logado permite ir para os detalhes
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
 
    useEffect(() => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tuana-Sampaio-Lovelace/trips")
        .then((res) => 
        //console.log(res.data.trips))
       setTripsList(res.data.trips))
        .catch((err)=> console.log(err.response))
    }, [tripsList])
    
    
    const goToCreateTripPage = () => {
        history.push("/CreateTrip")
    }

    const goToHomePage = () => {
        history.goBack("/")
    }

    const goToDetailsPage = (id) => {
        history.push(`/tripDetails/${id}`)
    }
    const deleteTrip = () => {
        //axios
    }

    const listTripComponents = tripsList.map((trip)=>{
        return <NameTripList 
        key ={trip.id}> <button onClick = {()=> goToDetailsPage(trip.id)} >{trip.name}</button> 
        
        <button /*onClick = {() => deleTrip()}*/>X</button></NameTripList> 
                
    })
        return(
        <ContainerAdmPage>
            <h1>Página de Administração</h1>

            <Buttons>
                <button onClick = {()=>goToHomePage()}>Voltar</button>
                <button onClick = {()=> goToCreateTripPage()}>Criar Viagem</button>
                <button>Logout</button>
            </Buttons>

            {listTripComponents}
        </ContainerAdmPage>
    )
}


export default AdminHomePage;