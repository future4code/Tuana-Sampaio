import React from "react"
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {RecipeCardContainer, RecipeCardContant} from "./styled"






const RecipesCard = (props) => {
    return(
        <RecipeCardContainer onClick = {props.onClick}>
            <CardActionArea>
                <CardMedia
                    component = {"img"}    
                    alt = {props.title}
                    height = {"150px"}
                    image = {props.image}
                    title = {props.title}
                />
                <RecipeCardContant>
                    <Typography align={'center'}>
                        {props.title.toUpperCase()}
                    </Typography>
                </RecipeCardContant>
            </CardActionArea>
        </RecipeCardContainer>
    )
}

export default RecipesCard