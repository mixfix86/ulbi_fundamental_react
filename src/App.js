import React from 'react';
import { useState, useMemo } from 'react';
import { PostList } from './components/PostList/PostList';
import { PostForm } from './components/PostForm/PostForm';

import './App.css';
import { PostFilter } from './components/PostFilter/PostFilter';

export const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'JS - programming language' },
    { id: 2, title: 'C', body: 'C - programming language' },
    { id: 3, title: 'C#', body: 'C# - programming language' },
    { id: 4, title: 'JAVA', body: 'JAVA - programming language' },
  ]);

  const [filter, setFilter] = useState({ query: '', sort: '' });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <div>
        <hr style={{ margin: '15px 0' }} />
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      {sortedAndSearchPosts.length !== 0 ? (
        <PostList
          remove={deletePost}
          posts={sortedAndSearchPosts}
          title='Post list'
        />
      ) : (
        <h1>Posts not found</h1>
      )}
    </div>
  );
};
