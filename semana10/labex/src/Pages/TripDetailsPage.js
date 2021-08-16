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

function TripDetailsPage(params) {
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