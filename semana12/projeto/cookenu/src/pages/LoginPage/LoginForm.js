import React from "react"
import { InputsContainer } from "./styled"
import { TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core"
import { login } from "../../services/user"
import { useHistory } from "react-router"


const LoginForm = ({rightButtonText, setRightButtonText}) => {

    const [form, onChange, clear] = useForm({email: "", password: ""})
    const history = useHistory()

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history,setRightButtonText)
    }

    
    return ( 
            <InputsContainer>
                <form onSubmit = {onSubmitForm}>
                    <TextField //form do material
                        name = {"email"}
                        value = {form.email}
                        onChange = {onChange}
                        label = {"email"}
                        variant = {"outlined"}
                        fullWidth
                        margin = {"normal"} 
                        required
                        type={"email"}
                    />
                     <TextField //form do material
                        name = {"password"}
                        value = {form.password}
                        onChange = {onChange}
                        label = {"senha"}
                        variant = {"outlined"}
                        fullWidth
                        margin = {"normal"}
                        required
                        type={"password"}
                    />

                        <Button
                        type = {"submit"}
                        fullWidth
                        variant = {"contained"}
                        color = {"primary"}
                        >Entrar</Button>
                </form>
            </InputsContainer>
    )
}

export default LoginForm