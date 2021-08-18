import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
    const history = useHistory()
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token === null){
            console.log("Não está logado")
            history.push("/login")
        }
    })
    
    useEffect(()=>{
        const token = localStorage.getItem("token")
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tuana-Sampaio-Lovelace/trip/0uJRfOJaim4y0PVKM4eb', 
        {
            headers: {
                auth: 'token'
            }

        }).then((res)=>{
            console.log("deu certo", res.data)
        }).catch((err)=>{
            console.log("deu erro:", err.response)                   
        })
    }, [])

    return(
        <ContainerDetailsPage>
            <h1>Viagem - Detalhes</h1>

            <CardTripList>
                <p>Nome:</p>
                <p>Descrição:</p>
                <p>Planeta:</p>
                <p>Duração: dias</p>
                <p>Data:</p>
            </CardTripList>

            <h2>Candidatos em análise</h2>
                <p>Sem Candidatos em análise</p>

                <h2>Candidatos aprovados</h2>
                <ul>
                    <li> candidato 1 </li>
                    <li> candidato 2 </li>
                    <li> candidato 3 </li>
                </ul>

                <Buttons>
                    <button>Voltar</button>
                </Buttons>
        </ContainerDetailsPage>
    )
    
}

export default TripDetailsPage;