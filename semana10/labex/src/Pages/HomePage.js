import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    
`

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 50px;
    padding-top: 170px;
    width: 20%;
`





function HomePage () {
    return(
        <Container>
            <h1>LabeX</h1>
            <Buttons> 
            <button>Viagens</button>
            <button>Página de Administração</button>
            </Buttons>
        </Container>
    )
}


export default HomePage;