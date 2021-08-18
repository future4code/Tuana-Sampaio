import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const history = useHistory()

    const goToHomePage = () => {
        history.goBack("/")
    }

    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Tuana-Sampaio-Labenu/login", body)
        .then((res)=>{
            //console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
            history.push("/AdminHome")
        }).catch((err)=>{
            console.log(err.response)
        })
    }

    return(
        <ContainerLoginPage>
            <h1>Login</h1>
            <Inputs> 
                <input type ="email" value = {email}  placeholder = "Email" onChange = {(e)=> setEmail(e.target.value)} /> 
                <input type ="password" value = {password} placeholder = "Senha" onChange = {(e)=> setPassword(e.target.value)} />
            </Inputs>

            <Buttons> 
                <button onClick = {()=>goToHomePage()}>Voltar</button>
                <button onClick = {()=>onSubmitLogin()}>Entrar</button>
            </Buttons>
        </ContainerLoginPage>
    )    
}

export default LoginPage;