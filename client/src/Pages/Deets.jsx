import React, { useEffect, useState } from 'react'
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap'
import RecipeDetails from '../components/RecipeDetails'
import API from '../utils/API'

export default function Deets () {

    const [recipeDetails, setRecipeDetails] = useState([])

    useEffect(() => {
        API.getRandomRecipe(3).then((results)=>{
            setRecipeDetails(results.data)
        })
    },[RecipeDetails])

    return(
        
        <Container>
            <Row>
                
                recipeDetails.map((recipeTitle)=>{
                    <RecipeDetails recipeTitle={recipeTitle}/>
                })
                
            </Row>
        </Container>
    )
}