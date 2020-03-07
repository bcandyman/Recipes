import React, { useEffect, useState } from 'react';
import BS from '../components/BootstrapComponents'
import Input from '../components/Input';
import API from '../utils/API';

function Pantry() {

  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    console.log('Get Ingredients from the Database');
  }, []);

  const handleOnKeyUp = e => {
    API.getIngredients(e.target.value).then(res => {
      setIngredients(res.data)
    })
  };

  const handleOnClick = e => {
    console.log(e.target.value)
    // console.log('oncliclk');
  }

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <BS.Container>
      <BS.Row>
        <BS.Col size='md-6'>
          <BS.Card>
            <BS.CardHeader>
              Add Ingredients
            </BS.CardHeader>
            <Input className='w-100' handleOnKeyUp={handleOnKeyUp} placeholder='start typing to find your ingredient' />
            <BS.Ul>
              {ingredients.map((val, index) => (
                <BS.Li key={index}>
                  <BS.Button className='btn-sm btn-success mr-3' name='searched-ingredient' value={val.name} handleOnClick={handleOnClick}>Add Item</BS.Button>
                  {val.name}
                </BS.Li>
              ))}
            </BS.Ul>
          </BS.Card>
        </BS.Col>
        <BS.Col size='md-6'>
          <BS.Card>
            <BS.CardHeader>
              My Ingredients
            </BS.CardHeader>
            <BS.Ul>
              {data.map((val, index) => (
                <BS.Li key={index}>
                  {val}
                </BS.Li>
              ))}
            </BS.Ul>
          </BS.Card>
        </BS.Col>
      </BS.Row>
    </BS.Container>
  )
}

export default Pantry;
