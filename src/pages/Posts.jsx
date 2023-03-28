import React, { useEffect } from 'react';
import { useState } from 'react';
import { PostList } from '../components/PostList/PostList';
import { PostForm } from '../components/PostForm/PostForm';
import { PostFilter } from '../components/PostFilter/PostFilter';
import { MyModal } from '../components/UI/MyModal/MyModal';
import { MyButton } from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';

import { Loader } from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';

import { Pagination } from '../components/UI/pagination/Pagination';

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ query: '', sort: '' });
  const [modalVisible, setModalVisible] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    // @ts-ignore
    setPosts([...posts, newPost]);
    setModalVisible(false);
  };

  const deletePost = (post) => {
    // @ts-ignore
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className='App'>
      <MyButton
        style={{ marginTop: '15px' }}
        onClick={() => setModalVisible(true)}
      >
        Добавить пост
      </MyButton>
      <MyModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <PostForm create={createPost} />
      </MyModal>

      <div>
        <hr style={{ margin: '15px 0' }} />
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      {postError ?? <h1>Что-то пошло не так...</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={deletePost}
          posts={sortedAndSearchPosts}
          title='Список постов'
        />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
};
