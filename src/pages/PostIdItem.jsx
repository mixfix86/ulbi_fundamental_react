import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from './../hooks/useFetching';
import PostService from './../API/PostService';
import { Loader } from '../components/UI/Loader/Loader';

export const PostIdItem = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  const [fetchComment, isCommentLoading, commentsError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentById(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(id);
    fetchComment(id);
  }, []);

  return (
    <div>
      <h1>Вы открыли страницу поста с ID {id}</h1>
      {(postError || commentsError) ?? <h1>Что-то пошло не так...</h1>}
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
      <h2>Комментарии</h2>
      {isCommentLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comment) => (
            <div key={comment.id}>
              <h5>{comment.name}</h5>
              <h4>{comment.email}</h4>
              <div>{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
