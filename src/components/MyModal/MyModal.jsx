import React from 'react';
import styles from './MyModal.module.css';

export const MyModal = ({ modalVisible, children, setModalVisible }) => {
  const openModal = [styles.myModal];

  if (modalVisible) {
    openModal.push(styles.myModalIsActive);
  }

  return (
    <div className={openModal.join(' ')} onClick={() => setModalVisible(false)}>
      <div className={styles.myModalContent} onClick={(e) => e.stopPropagation()}>
        <div>{children}</div>
      </div>
    </div>
  );
};
