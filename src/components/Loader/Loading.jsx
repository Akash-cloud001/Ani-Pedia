import React from 'react'
import styles from './Loader.module.css';
import animationData from '../../assets/JSON/animation_yellow_loader.json';
import Lottie from 'lottie-react';
const Loading = () => {
  return (
    <div className={styles.loader}>
      <Lottie animationData={animationData} className={styles.lottie}/>
    </div>
  )
}

export default Loading;