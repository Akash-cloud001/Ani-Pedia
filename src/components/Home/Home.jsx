import React, { useContext } from 'react'
import styles from './Home.module.css';
import AnimeHome from '../AnimeHome/AnimeHome';
import { DataContext } from '../../contexts/DataProvider';
const Home = () => {
  const {POPULAR, AIRING} = useContext(DataContext);
  const popData = POPULAR.data.slice(0,8);
  const airData = AIRING.data.slice(0,8);
  return (
    <section className={styles.home}>
      <AnimeHome name='popular' animeData={popData} />
      <hr/>
      <AnimeHome name='airing' animeData={airData} />
    </section>
  )
}

export default Home;