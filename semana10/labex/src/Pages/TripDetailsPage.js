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
const CardCandidates = styled.div`
    border: 1px solid #000;
    width:30%;
`

function TripDetailsPage() {
    const [trip, setTrip] = useState([])
    const [candidates, setCandidates] = useState({})
    const [approved, setApproved] = useState([])
    
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
            setTrip(res.data.trip)
            setApproved(res.data.trip.approved)
            setCandidates(res.data.trip.candidates)
        }).catch((err)=>{
            console.log("deu erro:", err.response)                   
        })
    }, [])

    //voltar para a página de administração
    const goToHomePage = () => {
        history.push("/AdminHome")
    }


    
        
    
    return(
        <ContainerDetailsPage>
            <h1>Viagem - Detalhes</h1>
            
            <CardTripList key = {trip.id}>
                <p>Nome:{trip.name} </p>
                <p>Descrição:{trip.description}</p>
                <p>Planeta:{trip.planet}</p>
                <p>Duração: {trip.durationInDays}dias</p>
                <p>Data:{trip.date}</p>
            </CardTripList>

            <h2>Candidatos em análise</h2>
            <CardCandidates> 
                <p> {candidates.name? candidates.name : "Não há candidatos em análise"} </p>
             </CardCandidates>

                <h2>Candidatos aprovados</h2>
                <ul>
                    <li> {approved.name? approved.name : "Não há candidatos aprovados"}  </li>
                    
                    </ul>
            
                <Buttons>
                    <button onClick = {()=> goToHomePage()}>Voltar</button>
                </Buttons>
        </ContainerDetailsPage>
    )
    
}

export default TripDetailsPage;