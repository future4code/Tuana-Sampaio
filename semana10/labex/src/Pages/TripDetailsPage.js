import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const ContainerDetailsPage = styled.div`
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

function TripDetailsPage() {
    const [trip, setTrip] = useState([])
    
    const params = useParams()
    //acessa o history
    const history = useHistory()
   
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
   
    useEffect(()=>{
        const token = localStorage.getItem("token")
        axios// path param na rota
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tuana-Sampaio-Lovelace/trip/${params.id}`, 
        {
            headers: {
                auth: token
            }

        }).then((res)=>{
            console.log("deu certo", res.data.trip)
            //setTrip(res.data.trip)
        }).catch((err)=>{
            console.log("deu erro:", err.response.data.message)                   
        })
    }, [trip])

    //voltar para a página de administração
    const goToHomePage = () => {
        history.push("/AdminHome")
    }

    const TripList = trip.map((trips)=>{
        return <CardTripList key = {trips.id}>
        <p>Nome:{trips.name} </p>
        <p>Descrição:{trips.description}</p>
        <p>Planeta:{trips.planet}</p>
        <p>Duração: {trips.durationInDays}dias</p>
        <p>Data:{trips.date}</p>
    </CardTripList>
    })
    return(
        <ContainerDetailsPage>
            <h1>Viagem - Detalhes</h1>


            <h2>Candidatos em análise</h2>
                <p>Sem Candidatos em análise</p>

                <h2>Candidatos aprovados</h2>
                <ul>
                    <li> candidato 1 </li>
                    <li> candidato 2 </li>
                    <li> candidato 3 </li>
                </ul>
            {TripList}
                <Buttons>
                    <button onClick = {()=> goToHomePage()}>Voltar</button>
                </Buttons>
        </ContainerDetailsPage>
    )
    
}

export default TripDetailsPage;