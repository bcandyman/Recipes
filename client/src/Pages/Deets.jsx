import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import API from '../utils/API'
import {
  Card,
  Container,
  Table
} from 'react-bootstrap'

export default function Deets() {

  const style = {
    instructionNumber: {
      fontSize: 20,
    }
  }

  const { recipeId } = useParams()
  const [recipeData, setRecipeData] = useState({});


  useEffect(() => {
    API.getRecipesDetails(recipeId)
      .then(res => {
        setRecipeData(res.data)
      })
      .catch(err => console.log(err));
  }, [])


  return (
    <Container>
      <Card>
        <Card.Title className="py-2 text-center">{recipeData.title}</Card.Title>
        <Card.Img src={recipeData.image} />
        <Card.Body>
          <Card.Title className="text-center">Ingredients</Card.Title>
          <Table>
            <thead>
              <tr>
                <th className='text-center'> - Item - </th>
                <th className='text-center'> - Quantity - </th>
              </tr>
            </thead>
            <tbody>
              {
                recipeData.extendedIngredients ?
                  recipeData.extendedIngredients.map((val, index) => (
                    <tr key={index}>
                      <td className='text-center'>{val.name}</td>
                      <td className='text-center'>{val.amount} {val.unit}</td>
                    </tr>
                  )) :
                  null
              }
            </tbody>
          </Table>
        </Card.Body>

        <Card.Body>
          <Card.Title className="text-center">Instructions</Card.Title>
          {
            recipeData.analyzedInstructions ?
              recipeData.analyzedInstructions[0].steps.map((val, index) => (
                <p key={index} className='py-2'><span style={style.instructionNumber}>{val.number}. </span>{val.step}</p>
              )) :
              null
          }
        </Card.Body>
      </Card>
    </Container>
  )
}