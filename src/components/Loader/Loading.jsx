import React from 'react'
import styles from './Loader.module.css';
import animationData from '../../assets/JSON/animation_lkuu0ipy.json';
import Lottie from 'lottie-react';
const Loading = () => {
  return (
    <div className={styles.loader}>
      <Lottie animationData={animationData}/>
    </div>
  )
}

export default Loading;