import { useState } from "react";
import styled from "styled-components";
import axios from "axios"


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
function ListTripsPage(params) {
    return(
        <Container>
            <Buttons>
            <button>Voltar</button>
            <button>Inscrever-se</button>
            </Buttons>

            <h1>Lista de Viagens</h1>
            <CardTripList>
                <p>Nome:</p>
                <p>Descrição:</p>
                <p>Planeta:</p>
                <p>Duração: dias</p>
                <p>Data:</p>
            </CardTripList>
        </Container>
    )
    
}

export default ListTripsPage;