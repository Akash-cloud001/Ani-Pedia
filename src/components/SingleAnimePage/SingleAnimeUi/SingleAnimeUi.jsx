import React from 'react'
import styles from './SingleAnimeUi.module.css';
const SingleAnimeUi = ({title}) => {
  return (
    <div className={styles.main}>SingleAnimeUi {title}</div>
  )
}

export default SingleAnimeUi;