import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [queryData, setQueryData] = useState([]);
  const [error, setError] = useState(false);
  const handleSubmit = (e)=>{
    search();
    e.preventDefault();
  }
  
  function search(){
    const baseUrl = ` https://api.jikan.moe/v4/anime?q=${query}&sfw`;
    if(query!==''){
      axios.get(baseUrl)
      .then((res)=>{
        setQueryData(res.data.data);
        console.log(res.data);
        if(res.data.pagination.items.count === 0){
          setError(true);
        }
      })
      .catch((err)=>{
        console.log(err);
        setQuery('');
      })  
    }else{
      setQueryData([]);
    }
  }

  const handleInputChange= (event)=>{
    setError(false);
    setQuery(event.target.value);
  }

  useEffect(()=>{
    let timeOut = setTimeout(()=>{
      search();
    },1000);
    return ()=>clearTimeout(timeOut);
  },[query]);


  useEffect(()=>{
    window.addEventListener("popstate",()=>{
      location.reload();
    });
  },[]);

  return (
    <div className={styles.nav}>
      <header className={styles.header}>
        <span>ANI</span>&nbsp;<span>PEDIA</span>
      </header>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input 
          tabIndex={0} 
          className={styles.input} 
          type='text' 
          placeholder='Search anime...' 
          value={query}
          onChange={handleInputChange}
        />
        <button className={styles.button} type='submit'>
          <i className="ri-search-2-line"></i>
        </button>
      </form>


      {error ? 
        <p className={styles.errorMessage}>No result found !!</p> 
        : 
        queryData.length!==null && <div className={styles.searchData}>
        <ul className={styles.searchUl}>
          {queryData.map((element)=>{
            return <li 
                      key={element.mal_id} 
                      className={styles.searchList} 
                      onClick={()=>{
                        const title = element.title_english !== null?element.title_english:element.title;
                          navigate(`/single-anime/${title}/${element.mal_id}`);
                          location.reload();
                      }}
                    >
                      <img className={styles.searchImg} src={element.images.webp.image_url} alt={element.title} />
                      <div className={styles.searchResultContainer}>
                        <h3 className={styles.searchHeader}>
                          {element.title}
                        </h3>
                        
                        <p className={styles.synopsis}>
                          {element.synopsis}
                        </p>
                        <div className={styles.searchValues}>
                          <span>
                            {element.aired.string}
                          </span>
                          <span>
                          <i className="ri-checkbox-blank-circle-fill"></i>
                            {element.type}
                          </span>
                        </div>
                      </div>
                    </li>
          })}
        </ul>
        {/* {!queryData.length ? null : 
        <Link to={'/search-result/1'} className={styles.seeAllResults} onClick={()=>{setQuery(''); setQueryData([])}}>
          See All Results
        </Link>
        
        } */}
        </div>
      }

      
    </div>
  )
}

export default Navbar;