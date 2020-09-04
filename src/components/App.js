import React from "react";
import { useState, useEffect } from "react";
import ShowMessage from "./ShowMessage";
import { useCallback } from "react";
import Post from "./Post";
import useUser from "../hooks/useUser";
// import CustomComponent from "./CustomComponent";

const initialPosts = [
  { title: "JavaScript", votes: 0 },
  { title: "PHP", votes: 0 },
  { title: "Ruby", votes: 0 },
  { title: "Go", votes: 0 },
  { title: "Node", votes: 0 },
  { title: "Python", votes: 0 },
];

function App(props) {
  const [posts, setPosts] = useState(initialPosts);
  const [userId, setUserId] = useState();

  const addVote = (index) => {
    const item = posts[index];
    const newItem = { ...item, votes: item.votes + 1 };

    let copyPosts = [...posts];
    copyPosts[index] = newItem;
    const sortedItems = copyPosts.sort((a, b) => b.votes - a.votes);
    setPosts(sortedItems);
  };

  const substractVote = (index) => {
    const item = posts[index];
    if (item.votes === 0) return;
    const newItem = { ...item, votes: item.votes - 1 };

    let copyPosts = [...posts];
    copyPosts[index] = newItem;
    const sortedItems = copyPosts.sort((a, b) => b.votes - a.votes);
    setPosts(sortedItems);
  };

  return (
    <div>
      <h1>Vote your fav language</h1>
      <input type="text" onChange={(e) => setUserId(e.target.value)} />
      <h2>
        Hello, <ShowMessage userId={userId} />
      </h2>
      <ul>
        {posts.map((item, index) => (
          <Post
            key={item.title}
            post={item}
            index={index}
            addVote={addVote}
            substractVote={substractVote}
          />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(App);
