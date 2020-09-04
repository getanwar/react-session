import React from "react";

function Post({ post, index, addVote, substractVote }) {
  return (
    <>
      <li>
        <h4>
          {post.title} &nbsp; - &nbsp; <span>{post.votes}</span>
        </h4>
        <button onClick={() => addVote(index)}>+</button>&nbsp; &nbsp;
        <button
          disabled={post.votes === 0}
          onClick={() => substractVote(index)}
        >
          -
        </button>
      </li>
      <br />
    </>
  );
}

export default Post;
