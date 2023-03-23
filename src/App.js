import React from "react";
import { useState } from "react";
import { PostList } from "./components/PostList/PostList";
import { PostForm } from "./components/PostForm/PostForm";

import "./App.css";
import { PostFilter } from "./components/PostFilter/PostFilter";
import { MyModal } from "./components/MyModal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";
import { usePosts, useSortedposts } from "./hooks/usePosts";

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "JS - programming language" },
    { id: 2, title: "C", body: "C - programming language" },
    { id: 3, title: "C#", body: "C# - programming language" },
    { id: 4, title: "JAVA", body: "JAVA - programming language" },
  ]);

  const [filter, setFilter] = useState({ query: "", sort: "" });
  const [modalVisible, setModalVisible] = useState(false);

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModalVisible(false);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: "15px" }}
        onClick={() => setModalVisible(true)}
      >
        Добавить пост
      </MyButton>
      <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <PostForm create={createPost} />
      </MyModal>

      <div>
        <hr style={{ margin: "15px 0" }} />
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      <PostList
        remove={deletePost}
        posts={sortedAndSearchPosts}
        title="Список постов"
      />
    </div>
  );
};
