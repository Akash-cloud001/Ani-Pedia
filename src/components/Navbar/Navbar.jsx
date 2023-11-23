import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import axios from 'axios';
import { NavLink ,Link, useNavigate,redirect } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [queryData, setQueryData] = useState([]);
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
        {query && queryData && <div className={styles.searchData}>
          <div className={styles.searchUl}>
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
                        {element.title}
                      </li>
            })}
          </div>
        </div>}
      </form>
    </div>
  )
}

export default Navbar;