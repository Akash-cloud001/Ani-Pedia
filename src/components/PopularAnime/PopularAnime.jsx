import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { baseURL, filterURL } from '../../contexts/DataProvider';
import styles from './PopularAnime.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loader/Loading';
import AnimeCard from '../AnimeCard/AnimeCard';
import GoToTop from '../GoToTop/GoToTop';

const PopularAnime = () => {
  const [nextPage, setNextPage ]= useState(1);
  const {pageNum} = useParams();
  const navigate = useNavigate();

  const [loader, setLoader] = useState(true);
  const [pageData, setPageData] = useState([]);

  async function fetchPopularData(pageNo = pageNum){
    setLoader(true);
    await axios.get(`${baseURL}${filterURL.popular}&page=${pageNum}`)
    .then((response)=>{

      const data = response.data;
      
      setPageData(data);

      setLoader(false);

    });
  }

  function handleNextPage(){
    //TODO
    let temp = nextPage + 1;
    setNextPage(prev=>prev+1);
    navigate(`/popular/${temp}`);
  }
  function handlePrevPage(){
    //TODO
    let temp = nextPage - 1;
    if(temp === 0) return;
    setNextPage(prev=>prev-1);
    navigate(`/popular/${temp}`);
  }
  
  useEffect(()=>{
    fetchPopularData(pageNum);
  },[nextPage]);

  useEffect(()=>{
      console.log(`popular Data of page Num ${pageNum}`);
      fetchPopularData(pageNum);
      window.addEventListener('popstate',()=>{
          handlePrevPage();
      });
      
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
           <button  
            className={styles.btn}
            disabled={pageNum==='1'?true:false}
            onClick={handlePrevPage}
           >
            <i className="ri-arrow-left-s-line"></i>
            <span>Prev</span>
          </button>
         <button 
            className={styles.btn} 
            disabled={!pageData.pagination.has_next_page}
            onClick={handleNextPage}
          >
            <span>Next</span>
            <i className="ri-arrow-right-s-line"></i>
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