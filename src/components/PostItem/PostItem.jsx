import React from "react";
import { MyButton } from "../UI/button/MyButton";
import styles from "./PostItem.module.css";

export const PostItem = ({ post, number, remove }) => {
  const { title, body } = post;

  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>
          {post.id}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className={styles.post__btns}>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};
