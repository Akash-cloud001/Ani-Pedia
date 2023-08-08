import React from 'react'
import styles from './AnimeCard.module.css';
import { Link } from 'react-router-dom';
const AnimeCard = ({id, title, title_english, images, score, rating, synopsis, type}) => {
    let charLimit = 0;
    let trimmedSyn = ''
    for(let ch in synopsis){
        if(charLimit === 200){
            trimmedSyn+='...';
            break;
        }
        trimmedSyn+=synopsis[ch];
        charLimit++;
    }
  return (
    <Link className={styles.card} to={`/single-anime/${title_english}/${id}`}>
        <figure className={styles.figure}>
            <img alt={title.english} src={images.jpg.large_image_url} className={styles.img}/>
            <p className={styles.score}>
                <i className="ri-star-fill"></i>&nbsp;{score}
            </p>
            <p className={styles.type}>
                <i className="ri-checkbox-blank-circle-fill"></i> &nbsp;{type}
            </p>
        </figure>
        <aside className={styles.aside}>
            <h4 className={styles.title}>
                {title_english} / {title}
            </h4>
            
            <p className={styles.rating}>
                {rating}
            </p>
            <p className={styles.about}>
                {trimmedSyn}
            </p>
        </aside>
    </Link>
  )
}

export default AnimeCard;