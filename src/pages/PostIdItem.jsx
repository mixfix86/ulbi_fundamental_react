import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from './../hooks/useFetching';
import PostService from './../API/PostService';
import { Loader } from '../components/UI/Loader/Loader';

export const PostIdItem = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchPostById(id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста с ID {id}</h1>
      {postError ?? <h1>Что-то пошло не так...</h1>}
      {isPostLoading ? (
        <Loader />
      ) : (
        <div>
          <strong>
            {id}. {post.title}
          </strong>
          <div>{post.body}</div>
        </div>
      )}
    </div>
  );
};
