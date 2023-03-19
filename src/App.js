import React, { useState } from "react";
import { PostList } from "./components/PostList/PostList";
import { PostForm } from "./components/PostForm/PostForm";

import "./App.css";

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "JS - programming language" },
    { id: 2, title: "C", body: "C - programming language" },
    { id: 3, title: "C#", body: "C# - programming language" },
    { id: 4, title: "JAVA", body: "JAVA - programming language" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    console.log(123);
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={deletePost} posts={posts} title="Post list" />
    </div>
  );
};
