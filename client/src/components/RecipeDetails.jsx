import React from 'react'
import {
    Card,
    Container,
    Row,
    Col,
    Table,
    Button
} from 'react-bootstrap'
import './RecipeDetails.css'

export default function RecipeDetails () {
    return(
        <Card md={4} className="ml-3 mt-3">
            <Container className="recipe-header">
                <Card.Title className="py-2 mr-auto"> Whole Wheat Crêpes </Card.Title>
            </Container>
            <Button size="sm" variant="success" className="mb-1" name='add-favorite'>Add Recipe to Favorites</Button>
            <Card.Img src="https://spoonacular.com/recipeImages/665280-556x370.jpg"></Card.Img>
            <Card>
                <Card.Title className="text-center py-3"> - Ingredients -  </Card.Title>
                <Table borderless="true"  striped="true" hover="true" className="text-center py-1">
                    <thead>
                        <tr>
                            <th> - Item - </th>
                            <th> - Quantity - </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>agave syrup</td>
                            <td>1 tablespoon</td>
                        </tr>
                        <tr>
                            <td>apple juice</td>
                            <td>0.25 cup</td>
                        </tr>
                        <tr>
                            <td>butter</td>
                            <td>2 Tablespoons</td>
                        </tr>
                        <tr>
                            <td>eggs</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>agave syrup</td>
                            <td>1 tablespoon</td>
                        </tr>
                    </tbody>
                </Table>
            </Card>

            <Card>
                <Table borderless="true"  striped="true" hover="true" className="py-3">
                    <thead> 
                        <tr>
                            <th className="text-center"> - Instructions - </th>
                        </tr> 
                    </thead>
                    <tbody className="py-1">
                        <tr>1. Beat the eggs lightly.</tr>
                        <tr>2. Add the milk and melted butter and combine well.Lightly sift in the flour and mix until it is completely dissolved. The batter will be runny and smooth. Leave it for about half an hour (in the refrigerator or at room temperature) as the flour swells a bit, which will make softer crpe.Lightly grease the frying pan with some light olive oil (or butter if you wish).</tr>
                    </tbody>
                </Table>
            </Card>
            

            {/* <Card>
                <Card.Title className="py-3 text-center"> - Instructions - </Card.Title>
                <Container className="mx-2 my-2">
                <Row>1. Beat the eggs lightly.</Row>
                <Row>2. Add the milk and melted butter and combine well.Lightly sift in the flour and mix until it is completely dissolved. The batter will be runny and smooth. Leave it for about half an hour (in the refrigerator or at room temperature) as the flour swells a bit, which will make softer crpe.Lightly grease the frying pan with some light olive oil (or butter if you wish).</Row>
                <Row>3. Pour about four tablespoons into the pan and swirl gently to completely cover the bottom.The crpes should pull away from the side as it cooks through. Once lightly browned flip over and cook for a few more seconds on the other side.</Row>
                <Row>4. Remove and keep warm.Re-grease the pan if crpes start sticking and continue making the crpes until all the batter is used up.Then heat the apple juice until boiling.</Row>
                </Container>
            </Card> */}
        </Card>
    )
}