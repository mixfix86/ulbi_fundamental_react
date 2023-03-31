import React from 'react';
import { MyButton } from '../UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

import styles from './PostItem.module.css';

export const PostItem = ({ post, remove }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();

  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>
          {post.id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className={styles.post__btns}>
        <MyButton onClick={() => navigate(`/posts/${id}`)}>Открыть</MyButton>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};
