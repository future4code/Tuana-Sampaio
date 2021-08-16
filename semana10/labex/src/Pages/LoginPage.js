import styled from "styled-components";


const ContainerLoginPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
`
const Inputs = styled.section`
display: flex;
flex-direction: column;
width: 30%;
row-gap: 30px;
`
const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 50px;
`



function LoginPage(params) {
    return(
        <ContainerLoginPage>
            <h1>Login</h1>
            <Inputs> 
                <input type ="text" value = ""  placeholder = "Email"/> 
                <input type ="password" value = "" placeholder = "Senha"/>
            </Inputs>

            <Buttons> 
                <button>Viagens</button>
                <button>Página de Administração</button>
            </Buttons>
        </ContainerLoginPage>
    )    
}

export default LoginPage;