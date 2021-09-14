import React from "react"
import { ErrorImage, ErrorPageContainer } from "./styled"
import error from "../../assets/error.png"



const Error = () => {
    return (
    <ErrorPageContainer>
        <ErrorImage src = {error}/>  
    </ErrorPageContainer>
    )
}

export default Error