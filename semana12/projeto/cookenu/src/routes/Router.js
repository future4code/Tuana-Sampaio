import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage"
import Error from "../pages/Error/Error"
import LoginPage from "../pages/LoginPage/LoginPage"
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage"
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"



const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path = "/Login">
                    <LoginPage/>
                </Route>
                <Route exact path = "/cadastro">
                    <SignUpPage/>
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
        </BrowserRouter>
    )
}

export default Router