import { useState } from 'react';
import { MyButton } from './components/UI/button/MyButton';
import { PostList } from './components/PostList/PostList';
import { MyInput } from './components/UI/input/MyInput';

import './App.css'

export const App = () => {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'JS - programming language' },
    { id: 2, title: 'C', body: 'C - programming language' },
    { id: 3, title: 'C#', body: 'C# - programming language' },
    { id: 4, title: 'JAVA', body: 'JAVA - programming language' },
  ])

  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, { ...post, id: Date.now() }])
    setPost({ title: '', body: '' })
  }

  return (
    <div className='App'>
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type='text'
          placeholder='Post name'
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type='text'
          placeholder='Post description'
        />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title='Post list' />
    </div >
  );
}

