import React, { useContext } from 'react'
import styles from './AnimeHome.module.css';
import AnimeCard from '../AnimeCard/AnimeCard';
import { Link } from 'react-router-dom';
import { DataContext } from '../../contexts/DataProvider';
const PopularAnime = ({name, animeData}) => {   
    const {fetchPopularData, fetchAiringData} = useContext(DataContext);
    const animes = animeData?.slice(0,8); 
    function handleRedirectionData(){
        switch(name){
            case 'popular':
                fetchPopularData();
                break;
            case 'airing':
                fetchAiringData();
                break;
            default:
                break;
        }
    }
  return (
    <div className={styles.popular}>
        <h2 className={styles.header}>
            {name}
        </h2>
        <div className={styles.popularItems}>
            {animes.map((item)=>{
                return <AnimeCard 
                    key={item.mal_id}
                    id = {item.mal_id}
                    {...item}
                />
            })}
        </div>
        <Link className={styles.btn} to={`${name}/1`} onClick={handleRedirectionData}>
            View More <i className="ri-arrow-right-line"></i>
        </Link>
    </div>
  )
}

export default PopularAnime;