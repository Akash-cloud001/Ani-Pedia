import React, { useContext } from 'react'
import styles from './PopularAnime.module.css';
import AnimeCard from '../AnimeCard/AnimeCard';
import { DataContext } from '../../contexts/DataProvider';
const PopularAnime = () => {
    const {POPULAR} = useContext(DataContext);
    const data = POPULAR.data;
    //we need to manage that we just want to send 12 items at first
    console.log(POPULAR.data);
  return (
    <div className={styles.popular}>
        <h2 className={styles.header}>
            Popular
        </h2>
        <div className={styles.popularItems}>
            {data.map((item)=>{
                return <AnimeCard 
                    title = {{english : item.title_english, japanese : item.title}}
                    score = {item.score}
                    rating = {item.rating}
                    imgUrl = {{jpg : {md : item.images.jpg.image_url, sx : item.images.small_images_url, lg : item.images.large_images_url}}}
                    synopsis = {item.synopsis}
                />
            })}
        </div>
        <button className={styles.btn}>
            View More
        </button>
    </div>
  )
}

export default PopularAnime;