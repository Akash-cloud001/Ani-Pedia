import React, { useState, useEffect } from 'react';
import styles from './SingleAnimePage.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loader/Loading';
import SingleAnimeUi from './SingleAnimeUi/SingleAnimeUi';


const SingleAnimePage = () => {
  const {name,id} = useParams();
  const [about, setAbout] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    async function fecthData(){
      await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`).then((res)=>{
        setAbout(res.data.data);
        setIsLoading(false);
      })
    }
    fecthData();
  },[])
  console.log(about);
  return (
    <>
      {isLoading? <Loading /> : null}
      {!isLoading && about && <SingleAnimeUi {...about}/>}
    </>
  )
}

export default SingleAnimePage;