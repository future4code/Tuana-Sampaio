import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { goToRecipesListPage } from "../routes/coordinator";



const useUnprotectedPage = () => {
    const history = useHistory()
    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            goToRecipesListPage(history)
        }
    },[history])
}

export default useUnprotectedPage