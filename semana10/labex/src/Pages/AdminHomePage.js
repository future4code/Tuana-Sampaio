import { useHistory } from "react-router-dom";
import styled from "styled-components";

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


function AdminHomePage () {
    const history = useHistory()

    const goToCreateTripPage = () => {
        history.push("/CreateTrip")
    }

    const goToHomePage = () => {
        history.goBack("/")
    }
    return(
        <ContainerAdmPage>
            <h1>Página de Administração</h1>

            <Buttons>
                <button onClick = {()=>goToHomePage()}>Voltar</button>
                <button onClick = {()=> goToCreateTripPage()}>Criar Viagem</button>
                <button>Logout</button>
            </Buttons>

            <NameTripList>
                <li>nome da viagem</li>
                <button>X</button>
            </NameTripList>
        </ContainerAdmPage>
    )
}


export default AdminHomePage;