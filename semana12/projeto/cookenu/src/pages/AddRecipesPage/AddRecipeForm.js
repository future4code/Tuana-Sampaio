import React from "react"
import { InputsContainer} from "./styled"
import TextField from "@material-ui/core/TextField"
import useForm from "../../hooks/useForm"
import Button from "@material-ui/core/Button"
import createNewRecipe from "../../services/recipe"




const AddRecipeForm = () => {
    const [form, onChange, clear] = useForm({title: "", description: "", image: ""})
    
    

    const onSubmitForm = (event) => {
        event.preventDefault()
        createNewRecipe(form, clear)
    }

    
    return ( 
            <InputsContainer>
                    <form onSubmit = {onSubmitForm}>
                    <TextField //form do material
                        name = {"title"}
                        value = {form.title}
                        onChange = {onChange}
                        label = {"Título"}
                        variant = {"outlined"}
                        fullWidth
                        margin = {"normal"} 
                        required
                        autoFocus
                    />
                
                    <TextField //form do material
                        name = {"description"}
                        value = {form.description}
                        onChange = {onChange}
                        label = {"description"}
                        variant = {"outlined"}
                        fullWidth
                        margin = {"normal"} 
                        required
                        
                    />
                     <TextField //form do material
                        name = {"image"}
                        value = {form.image}
                        onChange = {onChange}
                        label = {"Foto"}
                        variant = {"outlined"}
                        fullWidth
                        margin = {"normal"}
                        required
                        
                    />

                        <Button
                        type = {"submit"}
                        fullWidth
                        variant = {"contained"}
                        color = {"primary"}
                        >Criar Nova Receita</Button>
                </form>
            </InputsContainer>
    )
}

export default AddRecipeForm