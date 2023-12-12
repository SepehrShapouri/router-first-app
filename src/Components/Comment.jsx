import { Link, useParams } from "react-router-dom";
import { comments } from "../data/comment";
import React from "react";

function Comment() {
  const { id } = useParams();
  const comment = comments.find((c) => c.id === id);
  console.log(comment);
  return <div>
    <p>{comment.body}</p>
    <Link to="/comments">Back to comments section?</Link>
  </div>;
}

export default Comment;
