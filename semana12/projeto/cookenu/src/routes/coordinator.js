export const goToLogin = (history) => {
    history.push("/Login")
}

export const goToSignUpPage = (history) => {
    history.push("/cadastro")
}

export const goToRecipesListPage = (history) => {
    history.push("/")
}

export const goToRecipeDetailPage = (history, id) => {
    history.push(`/detalhe/${id}`)
}

export const goToAddRecipesPage = (history) => {
    history.push("/adicionar-receita")
}

