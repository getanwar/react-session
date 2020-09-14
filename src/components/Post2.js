import React from "react";
import { ADD_VOTE, REMOVE_VOTE } from "../actionTypes";

function Post({ post, index, dispatch }) {
  return (
    <>
      <li>
        <h4>
          {post.title} &nbsp; - &nbsp; <span>{post.votes}</span>
        </h4>
        <button onClick={() => dispatch({ type: ADD_VOTE, index })}>+</button>
        &nbsp; &nbsp;
        <button
          disabled={post.votes === 0}
          onClick={() => dispatch({ type: REMOVE_VOTE, index })}
        >
          -
        </button>
      </li>
      <br />
    </>
  );
}

export default Post;
