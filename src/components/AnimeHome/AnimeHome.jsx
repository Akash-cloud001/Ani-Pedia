import React, { useContext } from 'react'
import styles from './AnimeHome.module.css';
import AnimeCard from '../AnimeCard/AnimeCard';
import { Link } from 'react-router-dom';
const PopularAnime = ({name, animeData}) => {    
  return (
    <div className={styles.popular}>
        <h2 className={styles.header}>
            {name}
        </h2>
        <div className={styles.popularItems}>
            {animeData.map((item)=>{
                return <AnimeCard 
                    key={item.mal_id}
                    id = {item.mal_id}
                    {...item}
                />
            })}
        </div>
        <Link className={styles.btn} to={name}>
            View More <i className="ri-arrow-right-line"></i>
        </Link>
    </div>
  )
}

export default PopularAnime;