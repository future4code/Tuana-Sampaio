import React from "react"
import { ScreenContainer, LogoImage, InputsContainer, SignUpButtonContainer } from "./styled"
import logo from "../../assets/logo.png"
import { Button } from "@material-ui/core"
import LoginForm from "./LoginForm"
import { useHistory } from "react-router-dom"
import { goToSignUpPage } from "../../routes/coordinator"
import useUnprotectedPage from "../../hooks/useUnprotectedPage"


const LoginPage = ({rightButtonText, setRightButtonText}) => {
    useUnprotectedPage()

    const history = useHistory()

    return ( 
        <ScreenContainer>
            <LogoImage src = {logo} />
            <InputsContainer>
                <LoginForm rightButtonText = {rightButtonText} setRightButtonText={setRightButtonText}/>
            </InputsContainer>

            <SignUpButtonContainer>
                        <Button
                        onClick = {()=>goToSignUpPage(history)}
                        type = {"submit"}
                        fullWidth
                        variant = {"text"}
                        color = {"primary"}
                        >Não possui conta? Cadastre-se aqui
                        </Button>
                
             </SignUpButtonContainer>
        </ScreenContainer>
    )
}

export default LoginPage