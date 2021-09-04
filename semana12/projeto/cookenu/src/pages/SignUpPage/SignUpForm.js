import React from "react"
import { InputsContainer} from "./styled"
import { TextField } from "@material-ui/core"
import useForm from "../../hooks/useForm"
import { Button } from "@material-ui/core"
import { signUp } from "../../services/user"
import { useHistory } from "react-router"




const SignUpForm = ({rightButtonText, setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({name: "", email: "", password: ""})
    

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form, clear, history, setRightButtonText)
    }

    
    return ( 
            <InputsContainer>
                    <form onSubmit = {onSubmitForm}>
                    <TextField //form do material
                        name = {"name"}
                        value = {form.name}
                        onChange = {onChange}
                        label = {"nome"}
                        variant = {"outlined"}
                        fullWidth
                        margin = {"normal"} 
                        required
                        autoFocus
                    />
                
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
                        >Fazer Cadastro</Button>
                </form>
            </InputsContainer>
    )
}

export default SignUpForm