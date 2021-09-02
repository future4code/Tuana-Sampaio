import React from "react"
import AddRecipesPage from "./pages/AddRecipesPage/AddRecipesPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import RecipeDetailPage from "./pages/RecipeDetailPage/RecipeDetailPage"
import RecipesListPage from "./pages/RecipesListPage/RecipesListPage"
import SignUpPage from "./pages/SignUpPage/SignUpPage"
import Router from "./routes/Router"


function App() {
  return (
    <div>
      <Router/>
    </div>
  );
}

export default App;
