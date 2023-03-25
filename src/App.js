import React, { useEffect } from "react";
import { useState } from "react";
import { PostList } from "./components/PostList/PostList";
import { PostForm } from "./components/PostForm/PostForm";
import { PostFilter } from "./components/PostFilter/PostFilter";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";

import "./App.css";
import { Loader } from "./components/UI/Loader/Loader";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ query: "", sort: "" });
  const [modalVisible, setModalVisible] = useState(false);
  const [isPostsLoading, setIsPostsLoading] = useState(true);

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    // @ts-ignore
    setPosts([...posts, newPost]);
    setModalVisible(false);
  };

  const deletePost = (post) => {
    // @ts-ignore
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  async function fetchPosts() {
    const postsGet = await PostService.getAll();
    setPosts(postsGet);
    setIsPostsLoading(false);
  }

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
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={deletePost}
          posts={sortedAndSearchPosts}
          title="Список постов"
        />
      )}
    </div>
  );
};
