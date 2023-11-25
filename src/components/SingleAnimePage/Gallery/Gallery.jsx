import React from 'react';
import Carousel from "react-elastic-carousel";
import styles from './Gallery.module.css';
import './GalleryCarousel.css';
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const Gallery = ({characterList}) => {
  return (
    <div className={styles.carouselWrapper}>
        <Carousel breakPoints={breakPoints}  className={styles.carousel}>
            {characterList.map((character)=>
                <div key={character.character.mal_id} className={styles.card}>
                    <img src={character.character.images.jpg.image_url} alt={character.character.name} />
                    <p>{character.character.name}</p>
                </div>
            )}
        </Carousel>
    </div>
  )
}

export default Gallery;