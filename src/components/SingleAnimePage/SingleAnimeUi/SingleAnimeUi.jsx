import React, { useState } from 'react'
import styles from './SingleAnimeUi.module.css';
import YoutubeEmbeded from '../YoutubeEmbeded/YoutubeEmbeded';
const SingleAnimeUi = ({
  airing,
  duration,
  episodes,
  images,
  rating,
  score,
  source,
  status,
  streaming,
  synopsis,
  title,
  title_english,
  title_synonyms,
  trailer,
  type,
  year
}) => {

  const [toggle, setToggle] = useState(false);

  function handleSetToggle(e){
    e.preventDefault();
    setToggle(prev=>!prev);
  }

  let strippedSynopsis = '';
  const limit = 200;
  let count = 0;
  while(count <= limit){
    strippedSynopsis += synopsis[count];
    count++;
  }
  strippedSynopsis+='...';

  return (
    <section className={styles.main}>
      <img className={styles.bg} src={images.jpg.large_image_url} />
      <header className={styles.header}>
        <figure className={styles.headerFig}>
          <img className={styles.headerImg} src={images.jpg.large_image_url} alt={title_english}/>
        </figure>
        <aside className={styles.headerAside}>
          <h2 className={styles.title}>
            {title} / {title_english} 
            <i className="ri-checkbox-blank-circle-fill"></i>
            <span className={styles.details}>{year}</span>
          </h2>
          <h3 className={styles.status}>
            {status}
          </h3>
          <p className={styles.description}>
            
            <span>
              <i className="ri-star-s-fill"></i>&nbsp;{score}
            </span>
            
            <span>
              <i className="ri-checkbox-blank-circle-fill"></i>&nbsp;
              {type}
            </span>
            

            <span>
              <i className="ri-checkbox-blank-circle-fill"></i>&nbsp;
              {duration}
            </span>
            

            <span>
              <i className="ri-checkbox-blank-circle-fill"></i>&nbsp;
              {source}
            </span>
            

            <span>
              <i className="ri-checkbox-blank-circle-fill"></i>&nbsp;
              {rating}
            </span>
          </p>
          <p className={styles.synopsis}>
            {!toggle ? strippedSynopsis : synopsis}
            {synopsis.length > limit && !toggle ? 
              <button className={styles.toggleBtn} onClick={handleSetToggle}>Show More</button> 
              : 
              <button className={styles.toggleBtn} onClick={handleSetToggle}>Show Less</button>
            }
          </p>
        </aside>
      </header>
      <hr/>
      <figure className={styles.videoPlayer}>
            <h2 className={styles.sectionHeader}>Trailer</h2>
            <YoutubeEmbeded embededId={trailer.youtube_id} title={title}/>
      </figure>
      <hr/>
      <div className={styles.streaming}>
            <h2 className={styles.sectionHeader}>Streaming Platforms</h2>
            {streaming.length !== 0 ? 
            <ul className={styles.streamingUl}>
              {
                streaming.map((item, index)=>{
                  return <li key={item.name} className={styles.streamingLi}>
                            <a href={item.url} target='_blank'>Link from {item.name}</a>
                          </li>
                }) 
              }
            </ul> : 
            "Oops There isn't any platform available"
            }
      </div>
      <hr/>
      <div className={styles.gallery}>

      </div>
    </section>
  )
}

export default SingleAnimeUi;