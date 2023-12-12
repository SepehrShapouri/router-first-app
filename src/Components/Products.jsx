import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function Products() {
  return (
    <div>
        <h2>here you can access all your purchased products!</h2>
        <div style={{display:"flex",flexDirection:"column",marginBottom:"30px"}}>
            <Link to="1?name=ali">Product one</Link>
            <Link to="2">Product two</Link>
            <Link to="3">Product three</Link>
        </div>
    </div>
  )
}

export default Products