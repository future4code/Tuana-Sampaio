import { useHistory } from "react-router-dom";
import styled from "styled-components";


const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
`

const Inputs = styled.section`
    display: flex;
    flex-direction: column;
    width: 50%;
    row-gap: 30px;
`
const SelectTrip = styled.select`
    width: 50%;
`
const SelectCountry = styled.select`
    width: 50%;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 50px;
`


function ApplicationFormPage () {
    const history = useHistory()

    const goToListTrip = () => {
        history.goBack("/listTrip")
    }
    return(
        <ContainerForm>
            <h1>Candidate-se a uma viagem</h1>
            <SelectTrip>
                <option>Viagem 1</option> 
                <option>Viagem 2</option>
                <option>Viagem 3</option>
            </SelectTrip>
            
            <Inputs>
                <input type ="text" value = ""  placeholder = "Nome"/> 
                <input type ="text" value = "" placeholder = "Idade"/>
                <input type ="text" value = "" placeholder = "Texto de candidatura"/>
                <input type ="text" value = ""  placeholder = "Profissão"/>
            </Inputs>


            <SelectCountry>
                <option>País 1</option>
                <option>País 2</option>
                <option>País 3</option>
            </SelectCountry>
            
            <Buttons>
                <button onClick = {()=>goToListTrip()}>Voltar</button>
                <button>Enviar</button>
            </Buttons>

        </ContainerForm>
    )
}

export default ApplicationFormPage;