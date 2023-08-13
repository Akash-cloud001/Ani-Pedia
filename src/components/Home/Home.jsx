import React, { useContext } from 'react'
import styles from './Home.module.css';
import AnimeHome from '../AnimeHome/AnimeHome';
import { DataContext } from '../../contexts/DataProvider';
import Loading from '../Loader/Loading';
const Home = () => {
  const { loader, popular, airing } = useContext(DataContext);
  return (
    <>
    {loader? <Loading /> : null}
    {!loader && popular && airing &&
      <section className={styles.home}>
        <AnimeHome name='popular' animeData={popular.data} />
        <hr/>
        <AnimeHome name='airing' animeData={airing.data} />
      </section>
    }
    </>
  )
}

export default Home;