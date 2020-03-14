import React from 'react'
import {
  ButtonGroup,
  Button
} from 'react-bootstrap'

export default function SearchBar({ className, handleOnClick, buttons }) {

  return (
    <ButtonGroup onClick={handleOnClick} className={className} aria-label="Basic example">
      {buttons.map((val, index) => <Button key={index} value={val.value}>{val.caption}</Button>)}
    </ButtonGroup>
  )
}