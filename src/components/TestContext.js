import React, { useReducer } from "react";
import Post2 from "./Post2";
import { ADD_VOTE, REMOVE_VOTE } from "../actionTypes";

const initialPosts = [
  { title: "JavaScript", votes: 0 },
  { title: "PHP", votes: 0 },
  { title: "Ruby", votes: 0 },
  { title: "Go", votes: 0 },
  { title: "Node", votes: 0 },
  { title: "Python", votes: 0 },
];

function postReducer(state, action) {
  switch (action.type) {
    case ADD_VOTE: {
      const { index } = action;
      const item = state[index];
      const newItem = { ...item, votes: item.votes + 1 };

      let copyPosts = [...state];
      copyPosts[index] = newItem;
      const sortedItems = copyPosts.sort((a, b) => b.votes - a.votes);
      return sortedItems;
    }

    case REMOVE_VOTE: {
      const { index } = action;
      const item = state[index];
      if (item.votes === 0) return;
      const newItem = { ...item, votes: item.votes - 1 };

      let copyPosts = [...state];
      copyPosts[index] = newItem;
      const sortedItems = copyPosts.sort((a, b) => b.votes - a.votes);
      return sortedItems;
    }
    default:
      return state;
  }
}

function TestContext(props) {
  const [state, dispatch] = useReducer(postReducer, initialPosts);

  return (
    <div>
      <h1>Vote your fav language</h1>
      <ul>
        {state.map((item, index) => (
          <Post2
            key={item.title}
            post={item}
            index={index}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </div>
  );
}

export default TestContext;
