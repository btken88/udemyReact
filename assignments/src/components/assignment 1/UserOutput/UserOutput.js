import React from 'react'
import './UserOutput.css'

export default function UserOutput(props) {
  return (
    <div className='UserOutput'>
      <p>{props.username ? props.username : "First Paragraph"}</p>
      <p>This is the second paragraph</p>
    </div>
  )
}
