import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios"
import { useHistory } from "react-router-dom";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
`

const CardTripList = styled.ul`
    border: 1px solid #000;
    width:30%;
`


const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 50px;
`
function ListTripsPage() {
    
    const [tripsList, setTripsList] = useState([])

    useEffect(() => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tuana-Sampaio-Lovelace/trips")
        .then((res) => 
        //console.log(res.data.trips))
       setTripsList(res.data.trips))
        .catch((err)=> console.log(err.response))
    }, [tripsList])
    
    
    
    const listTripComponents = tripsList.map((trip)=>{
        return <CardTripList key ={trip.id}>
        <p>Nome:{trip.name} </p>
        <p>Descrição:{trip.description}</p>
        <p>Planeta:{trip.planet}</p>
        <p>Duração: {trip.durationInDays}dias</p>
        <p>Data:{trip.date}</p>
    </CardTripList>
    })

    const history = useHistory()

    const goToApplicationPage = () => {
        history.push("/ApplicationForm")
    }
    const goToHomePage = () => {
        history.goBack("/")
    }
    
    return(
        <Container>
            <Buttons>
            <button onClick = {()=>goToHomePage()}>Voltar</button>
            <button onClick = {()=>goToApplicationPage()}>Inscrever-se</button>
            </Buttons>

            <h1>Lista de Viagens</h1>
            {listTripComponents}
        </Container>
    )
    
}

export default ListTripsPage;