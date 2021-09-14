
import React from "react"
import RecipesCard from "../../components/RecipesCard/RecipesCard"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/UseRequestData"
import {BASE_URL} from "../../constants/urls"
import { AddRecipeButton, RecipeListContainer } from "./styled"
import { Add } from "@material-ui/icons"
import { goToAddRecipesPage, goToRecipeDetailPage } from "../../routes/coordinator"
import { useHistory } from "react-router"


const RecipesListPage = () => {
    useProtectedPage()
    const history = useHistory()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    
    const onClickRecipe = (id) => {
        goToRecipeDetailPage(history, `${id}`)
    } 

    const recipesList = recipes.map((recipe)=>{
        return(
        <RecipesCard
            key = {recipe.recipe_id}
            title = {recipe.title}
            image ={recipe.image}
            onClick = {() => onClickRecipe(recipe.recipe_id)}
        />
        )
    })
    return (
        <RecipeListContainer>      
            {recipesList}

        <AddRecipeButton
            color = {"primary"}
            onClick = {()=> goToAddRecipesPage(history)}
        >
            <Add/>
        </AddRecipeButton>
        </RecipeListContainer>
    )
    
}

export default RecipesListPage