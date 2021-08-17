import { useHistory } from "react-router-dom"
import styled from "styled-components"



const ContainerTripPage = styled.div`
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

const SelectPlanet = styled.select`
    width: 50%;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 50px;
`

function CreateTripPage(params) {
    const history = useHistory()

    const goToHomePage = () => {
        history.goBack("/")
    }

   
    return(
        <ContainerTripPage>
            <h1>Criar Nova Viagem</h1>
            <Inputs>
                <input type ="text" value = ""  placeholder = "Nome"/> 
                               
            </Inputs>

            <SelectPlanet>
                <option>Escolha um planeta</option>
                <option>Planeta 1</option>
                <option>Planeta 2</option>
                <option>Planeta 3</option>
            </SelectPlanet>

            <Inputs>
                <input type ="date" value = ""  placeholder = "Escolha uma data"/>  
                <input type ="text" value = ""  placeholder = "Descrição"/> 
                <input type ="text" value = ""  placeholder = "Duração em dias"/>               
            </Inputs>

            <Buttons>
                <button onClick = {()=>goToHomePage()}>Voltar</button>
                <button>Criar Viagem</button>
            </Buttons>

        </ContainerTripPage>
    )
    
}

export default CreateTripPage;