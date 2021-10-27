import app from "./app"
import createRecipe from "./endpoints/recipes/createRecipe"
import getRecipesById from "./endpoints/recipes/getRecipesById"
import getProfile from "./endpoints/recipes/users/users/getProfile"
import getUserById from "./endpoints/recipes/users/users/getUserById"
import login from "./endpoints/recipes/users/users/login"
import signup from "./endpoints/recipes/users/users/signup"


app.post("/users/signup", signup)
app.post("/users/login", login)
app.get("/users/profile", getProfile)
app.get("/users/:id/profile", getUserById)

app.post("/recipe", createRecipe)
app.get("/recipe/:id", getRecipesById)



