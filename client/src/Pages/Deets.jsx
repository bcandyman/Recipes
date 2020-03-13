import React from 'react'
import {
    Card,
    Container,
    Row,
    Col,
    Table
} from 'react-bootstrap'
import RecipeDetails from '../components/RecipeDetails'

export default function Deets () {
    return(
        <Container>
            <Row>
                <Col><RecipeDetails></RecipeDetails></Col>
                <Col><RecipeDetails></RecipeDetails></Col>
                <Col><RecipeDetails></RecipeDetails></Col>
            </Row>
            <Row>
                <Col><RecipeDetails></RecipeDetails></Col>
                <Col><RecipeDetails></RecipeDetails></Col>
                <Col><RecipeDetails></RecipeDetails></Col>
            </Row>
            <Row>
                <Col><RecipeDetails></RecipeDetails></Col>
                <Col><RecipeDetails></RecipeDetails></Col>
                <Col><RecipeDetails></RecipeDetails></Col>
            </Row>
        </Container>
    )
}