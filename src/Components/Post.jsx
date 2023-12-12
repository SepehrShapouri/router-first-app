import React from 'react'
import { Link, useParams } from 'react-router-dom'
const posts = [{id:1,body:"hello"},{id:2,body:"hello there"}]
function Post() {
    const {id} = useParams()
    const post = posts.find(p=>p.id === Number(id))
  return (
    <div>{post.body}
    <Link to="/posts">back to posts?</Link> </div>
  )
}

export default Post