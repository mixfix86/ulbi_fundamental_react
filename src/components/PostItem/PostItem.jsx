import React from 'react';
import styles from './PostItem.module.css';

export const PostItem = ({ post }) => {

  const {id, title, body} = post

  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>{id}. {title}</strong>
        <div>{body}</div>
      </div>
      <div className={styles.post__btns}>
        <button>Delete</button>
      </div>
    </div>
  )
}
