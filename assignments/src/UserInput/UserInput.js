import React from 'react'

export default function UserInput(props) {
  const style = {
    margin: '2rem',
    padding: '.5rem',
    fontSize: '2rem',
    textAlign: 'center'
  }

  return (<input style={style} type="text" onChange={props.handler} value={props.username}></input>)
}
