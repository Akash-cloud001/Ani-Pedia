import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const DataContext = createContext();

export const baseURL =' https://api.jikan.moe/v4/top/anime?filter=';
export const filterURL = {airing : 'airing', popular : 'bypopularity'};

const DataProvider = ({children}) => {
  
  const [loader, setLoader] = useState(true);
  const [popular, setPopular] = useState(JSON.parse(sessionStorage.getItem('popular')) || []);
  const [airing, setAiring] = useState(JSON.parse(sessionStorage.getItem('airing')) || []);



  async function fetchDataForHomePage(){
    if(popular.length === 0){
      await axios.get(`${baseURL}${filterURL.popular}`)
      .then((res)=>{
  
        const data = res.data;
  
        sessionStorage.setItem('popular', JSON.stringify(res.data));  
        setPopular(JSON.parse(sessionStorage.getItem('popular')));
      });
    }
    if(airing.length === 0){
      await axios.get(`${baseURL}${filterURL.airing}`)
      .then((res)=>{
  
        const data = res.data;  
        sessionStorage.setItem('airing', JSON.stringify(res.data));
        setAiring(JSON.parse(sessionStorage.getItem('airing')));
      });
    }
    
    setLoader(false);
  }




  useEffect(()=>{
    //? fetching DATA when componentDidMount
    fetchDataForHomePage();
  },[])


  return (
    <DataContext.Provider value={{
      loader,
      popular, 
      airing, 
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;