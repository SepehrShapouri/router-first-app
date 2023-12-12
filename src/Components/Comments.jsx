import React from 'react'
import { comments } from '../data/comment'
import { Link } from 'react-router-dom'
function Comments() {
  return (
    <div>
        <h2>Welcome to your comment section!</h2>
        <p>here you can access all the feedback that people have on you</p>
        <nav>
            <ul>
            {comments.map((c)=><li key={c.id}><Link to={c.id}>{c.title}</Link></li>)}
            </ul>
        </nav>
    </div>
  )
}

export default Comments