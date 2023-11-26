import React, { useEffect, useState } from 'react'
import styles from './AnimeCard.module.css';
import { Link } from 'react-router-dom';
const AnimeCard = ({id, title, title_english, images, score, rating, synopsis, type}) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [sliceString, setSliceString] = useState('');

    useEffect(()=>{
        const handleResize = ()=>{
            setWindowWidth(window.innerWidth);
            let substrLength;

            if(window.innerWidth < 280){
                substrLength = 35;
            }else if(window.innerWidth < 375){
                substrLength = 50;
            }else if(window.innerWidth < 575){
                substrLength = 80;
            }else if(window.innerWidth < 769){
                substrLength = 50;
            }else if(window.innerWidth < 1200){
                substrLength = 45;
            }else if(window.innerWidth > 1200){
                substrLength = 90;
            }

            const slicedString = synopsis.slice(0, substrLength)+'...';

            setSliceString(slicedString);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    },[])

    let charLimit = 0;
    let trimmedSyn='';
    for(let ch in synopsis){
        if(charLimit === 40){
            trimmedSyn+='...';
            break;
        }
        trimmedSyn+=synopsis[ch];
        charLimit++;
    }
    const header_title = title_english !== null ? title_english : title; 
    const urlTitle = title_english !== null ? title_english : title;


  return (
    <Link className={styles.card} to={`/single-anime/${urlTitle}/${id}`}>
        <figure className={styles.figure}>
            <img alt={title} src={images.jpg.large_image_url} className={styles.img}/>
            <p className={styles.score}>
                <i className="ri-star-fill"></i>&nbsp;{score}
            </p>
            <p className={styles.type}>
                <i className="ri-checkbox-blank-circle-fill"></i> &nbsp;{type}
            </p>
        </figure>
        <aside className={styles.aside}>
            <h4 className={styles.title}>
                {header_title}
            </h4>
            
            <p className={styles.rating}>
                {rating}
            </p>
            <p className={`${styles.about} about`}>
                {sliceString}
            </p>
        </aside>
    </Link>
  )
}

export default AnimeCard;