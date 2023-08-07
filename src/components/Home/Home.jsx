import React, { useContext } from 'react'
import styles from './Home.module.css';
import PopularAnime from '../PopularAnime/PopularAnime';
const Home = () => {
  return (
    <section className={styles.home}>
      <PopularAnime />
    </section>
  )
}

export default Home;