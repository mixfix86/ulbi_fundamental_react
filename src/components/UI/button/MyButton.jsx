import React from 'react';
import styles from './MyButton.module.css';

export const MyButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.myBtn} ${props.active && styles.myBtn__current}`}
    >
      {children}
    </button>
  );
};
