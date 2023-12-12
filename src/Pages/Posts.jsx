import React from 'react'
import { Link } from 'react-router-dom'

function Posts() {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <Link to="1">post 1</Link>
        <Link to="2">post 2</Link>
    </div>
  )
}

export default Posts