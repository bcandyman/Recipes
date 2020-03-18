import React from 'react'
import { Link } from 'react-router-dom';
import {
  ButtonGroup,
  Button
} from 'react-bootstrap'

export default function SearchBar({ className, handleOnClick, buttons }) {

  return (
    <ButtonGroup onClick={handleOnClick} className={className} aria-label="Basic example">
      {buttons.map((val, index) => (
        val.to ?
          <Link key={index} to={val.to}>
            <Button value={val.value}>{val.caption}</Button>
          </Link> :
          <Button key={index} value={val.value}>{val.caption}</Button>
      ))}
    </ButtonGroup>
  )
}