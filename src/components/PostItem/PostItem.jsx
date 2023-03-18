import React from 'react';
import styles from './PostItem.module.css';

export const PostItem = ({ post, number }) => {

  const {title, body} = post

  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>{number}. {title}</strong>
        <div>{body}</div>
      </div>
      <div className={styles.post__btns}>
        <button>Delete</button>
      </div>
    </div>
  )
}
