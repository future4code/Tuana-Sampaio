import React from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/UseRequestData"
import { RecipeContainer, ScreenContainer, RecipeImage } from "./styled"
import Typography from "@material-ui/core/Typography"


const RecipeDetailPage = () => {
    useProtectedPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`) [0]
    console.log(recipe)
    return (
        <ScreenContainer>
            {recipe && 
            <RecipeContainer>
                <Typography gutterBottom align={'center'} variant={'h4'} color={'black'}>{recipe.title}</Typography>
            <RecipeImage src = {recipe.image} />
                <Typography align={'justify'} variant={'h6'}>{recipe.description}</Typography>
            </RecipeContainer>} 
        </ScreenContainer>
    )
    
}

export default RecipeDetailPage