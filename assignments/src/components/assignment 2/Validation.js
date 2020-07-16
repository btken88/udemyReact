import React from 'react'

export default function Validation(props) {
  return (
    <p>{props.textLength > 5 ? "Text long enough." : "Text too short."}</p>
  )
}