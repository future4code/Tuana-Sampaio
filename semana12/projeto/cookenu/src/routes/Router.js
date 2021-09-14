import React from "react"
import {Switch, Route } from "react-router-dom"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import Error from "../pages/Error/Error"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"



const Router = ({rightButtonText, setRightButtonText}) => {
    return(
            <Switch>
                <Route exact path = "/Login">
                    <LoginPage rightButtonText = {rightButtonText} setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path = "/cadastro">
                    <SignUpPage rightButtonText = {rightButtonText} setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path = "/" >
                    <RecipesListPage/>
                </Route>
                <Route exact path = "/detalhe/:id">
                    <RecipeDetailPage/>
                </Route>
                <Route exact path = "/adicionar-receita">
                    <AddRecipesPage/>
                </Route>
                <Route>
                    <Error/>
                </Route>
            </Switch>
        
    )
}

export default Router