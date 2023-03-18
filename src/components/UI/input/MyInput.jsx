import React from 'react'
import styles from './MyInput.module.css'

export const MyInput = ((props) => {
  return (
    <input className={styles.myInput} {...props} />
  )
})
