import React from 'react'
import styles from './AnimeCard.module.css';
const AnimeCard = ({title, imgUrl, score, rating, synopsis}) => {
    let charLimit = 0;
    let trimmedSyn = ''
    for(let ch in synopsis){
        if(charLimit === 150){
            trimmedSyn+='...';
            break;
        }
        trimmedSyn+=synopsis[ch];
        charLimit++;
    }
  return (
    <div className={styles.card}>
        <figure className={styles.figure}>
            <img alt={title.english} src={imgUrl.jpg.md} className={styles.img}/>
            <p className={styles.score}>
                <i class="ri-star-fill"></i>&nbsp;{score}
            </p>
        </figure>
        <aside className={styles.aside}>
            <h4 className={styles.title}>
                {title.english} / {title.japanese}
            </h4>
            
            <p className={styles.rating}>
                {rating}
            </p>
            <p className={styles.about}>
                {trimmedSyn}
            </p>
        </aside>

    </div>
  )
}

export default AnimeCard;