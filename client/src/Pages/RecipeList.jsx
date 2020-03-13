import React from 'react'
import {
    Container,
    Row,
} from 'react-bootstrap'

export default function RecipeList () {
    return(
        <Container>
        <Row>
            <h1>Recipes in your Pantry</h1>
        </Row>
        <Row>
        {/* recipe map will go here */}
        </Row>
        </Container>
    )
}