import React from 'react'
import styles from './YoutubeEmbeded.module.css';
const YoutubeEmbeded = ({embededId, title}) => {
    const BaseUrl = 'https://www.youtube.com/watch?v=';

    return (
        <iframe
            className={styles.iframe}
            src={`https://www.youtube.com/embed/${embededId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
        />
    )
}

export default YoutubeEmbeded;