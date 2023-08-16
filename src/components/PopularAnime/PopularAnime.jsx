import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL, filterURL } from '../../contexts/DataProvider';
import styles from './PopularAnime.module.css';
import { useParams } from 'react-router-dom';
import Loading from '../Loader/Loading';
import AnimeCard from '../AnimeCard/AnimeCard';
import GoToTop from '../GoToTop/GoToTop';

const PopularAnime = () => {
  const {pageNum} = useParams();
  const [loader, setLoader] = useState(true);
  const [pageData, setPageData] = useState([]);

  async function fetchPopularData(pageNo = pageNum){

    await axios.get(`${baseURL}${filterURL.popular}&page=${pageNo}`)
    .then((response)=>{

      const data = response.data;
      
      setPageData(data);

      setLoader(false);

    });
  }


  useEffect(()=>{
      console.log(`popular Data of page Num ${pageNum}`);
      fetchPopularData(pageNum);
  },[]);

  useEffect(()=>{
    function handlePopState(){
      fetchPopularData(pageNum);
    }
    window.addEventListener('popstate', handlePopState);
    return()=>{
      window.removeEventListener('popstate', handlePopState);
    }
  },[]);

  return (
    <>
    {loader ? <Loading/> : null}
    {!loader && pageData &&
      <section className={styles.pageSection}>
        <h2 className={styles.pageHeader}>
          POPULAR
        </h2>
        <main className={styles.pageMain}>
          {pageData.data.map((item)=>{
            return <AnimeCard
              key={item.mal_id}
              id={item.mal_id}
              {...item}
            />
          })}
        </main>
        <div className={styles.btnContainer}>
          <button  className={styles.btn}>
            <i className="ri-arrow-left-s-line"></i>
            <span>Prev</span>
          </button>
          <button className={styles.btn}>
            <i className="ri-arrow-right-s-line"></i>
            <span>Next</span>
          </button>
        </div>
        <GoToTop />
      </section>
    }
    <GoToTop />
    </>
  )
}

export default PopularAnime;