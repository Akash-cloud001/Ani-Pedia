import React, { useState, useEffect } from 'react';
import styles from './SingleAnimePage.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loader/Loading';
import SingleAnimeUi from './SingleAnimeUi/SingleAnimeUi';
import GoToTop from '../GoToTop/GoToTop';


const SingleAnimePage = () => {
  const {name,id} = useParams();
  const [about, setAbout] = useState({});
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    async function fetchAnime(){
      await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`).then((res)=>{
        setAbout(res.data.data);
        
      })
    }
    async function fetchAnimeCharacter(){
      await axios.get(`https://api.jikan.moe/v4/anime/${id}/characters`).then((res)=>{
        setCharacter(res.data);
        setIsLoading(false);
      })
    }
    fetchAnime();
    fetchAnimeCharacter();
  },[])
  console.log(about);
  console.log('character', character);
  return (
    <>
      {isLoading? <Loading /> : null}
      {!isLoading && about && <SingleAnimeUi {...about} character={character}/>}
      <GoToTop />
    </>
  )
}

export default SingleAnimePage;