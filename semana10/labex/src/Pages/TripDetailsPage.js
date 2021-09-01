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
    justify-content: center;
    column-gap: 60px;
`
const CardCandidates = styled.ul`
    border: 1px solid #000;
    width:90%;
    padding: 20px;
    margin-right:50px;
`

function TripDetailsPage() {
    const [trip, setTrip] = useState([])
    const [candidates, setCandidates] = useState([])
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
        axios// path param na rota. retorna os detalhes e os candidatos de uma viagem específica.
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


    const aproveCandidate = () => {   
    
        const token = localStorage.getItem("token")

        const body = { 

            approve: true
        }

        axios// decidir a aprovação ou não de um candidato para uma viagem. descobrir como pegar o id do candidato
        .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tuana-Sampaio-Lovelace/trips/${params.id}/candidates/:candidateId/decide`, body, 
        {
            headers: {
                auth: token,
                'Content-Type' : 'application/json'
            }

        }).then((res)=>{
            console.log("deu certo", res.data.trip)
            setApproved(res.data.trip.approved)
        }).catch((err)=>{
            console.log("deu erro:", err.response)                   
        })
    }

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
             
                <p> {candidates? 
                    candidates.map((candidate)=>{
                        return<CardCandidates key = {candidate.id}>  
                           <p>Nome: {candidate.name} </p> 
                           <p>Profissão: {candidate.profession} </p> 
                           <p>Idade: {candidate.age} </p> 
                           <p>País: {candidate.country} </p> 
                            <p>Texto de candidatura: {candidate.applicationText}</p> 
                            
                            <Buttons>
                            <button onClick = {()=> aproveCandidate()}>Aprovar</button>
                            <button>Reprovar</button>
                            </Buttons>
                            
                            </CardCandidates>  
                        }) 
                    : "Não há candidatos em análise"} </p>
                    
             

                <h2>Candidatos aprovados</h2>
                <ul>
                    <li> {approved? 
                         approved.map((approved)=>{
                             return <ul> 
                                        <li>
                                            {approved.name}
                                        </li>
                                    </ul> 
                             })
                         : "Não há candidatos aprovados"} </li>
                    
                    </ul>
            
                <Buttons>
                    <button onClick = {()=> goToHomePage()}>Voltar</button>
                </Buttons>
        </ContainerDetailsPage>
    )
    
}

export default TripDetailsPage;