import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const DataContext = createContext();

const baseURL =' https://api.jikan.moe/v4/top/anime?filter=';
const filterURL = {airing : 'airing', popular : 'bypopularity'};


const DataProvider = ({children}) => {
  
  const POPULAR = JSON.parse(window.localStorage.getItem('popular')) || [];
  const AIRING = JSON.parse(window.localStorage.getItem('airing')) || [];

  const [loader, setLoader] = useState(true);
  const [popular, setPopular] = useState([]);
  const [airing, setAiring] = useState([]);

  function removeLoading(){
    setTimeout(()=>{
      setLoader(false);
    }, 2000);
  }

  useEffect(()=>{
    async function fetchData(filter){
      switch (filter){
        case filterURL.popular:
          await axios.get(`${baseURL}${filter}`).then((response)=>{
            window.localStorage.setItem('popular', JSON.stringify(response.data));
            setPopular(response.data);
          });
          break;
        case filterURL.airing:
          await axios.get(`${baseURL}${filter}`).then((response)=>{
            window.localStorage.setItem('airing',JSON.stringify(response.data));
            setAiring(response.data);
          });
        break;
      }
      
    }
    if(POPULAR.length === 0){
      fetchData(filterURL.popular);
    }
      
    if(AIRING.length === 0){
      //Just to delay a request on api so we can fetch the data... 
      setTimeout(()=>{
        fetchData(filterURL.airing);
      }, 1000);    
    }

    //to remove Loading Component
    removeLoading();

  },[])

  return (
    <DataContext.Provider value={{loader, POPULAR, AIRING}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;