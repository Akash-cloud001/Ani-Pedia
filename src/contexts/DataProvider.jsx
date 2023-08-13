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

  const [popularPageData, setPopularPageData] = useState([]);
  const [airingPageData, setAiringPageData] = useState([]);



  async function fetchDataForHomePage(){
    await axios.get(`${baseURL}${filterURL.popular}`)
    .then((res)=>{
      const data = res.data;
      setPopular(data);
    });
    await axios.get(`${baseURL}${filterURL.airing}`)
    .then((res)=>{
      const data = res.data;
      setAiring(data);
    });
    setLoader(false);
  }

  async function fetchPopularData(pageNo = 1){
    setLoader(true);
    await axios.get(`${baseURL}${filterURL.popular}&page=${pageNo}`)
    .then((response)=>{
      const data = response.data;
      setPopularPageData(data);
      setLoader(false);
    });
  }

  async function fetchAiringData(pageNo = 1){
    setLoader(true);
    await axios.get(`${baseURL}${filterURL.airing}&page=${pageNo}`)
    .then((response)=>{
      const data = response.data;
      setAiringPageData(data);
      setLoader(false);
    });
  }


  useEffect(()=>{
    //? fetching DATA when componentDidMount
    fetchDataForHomePage();
  },[])


  return (
    <DataContext.Provider value={{loader, popular, airing, popularPageData, airingPageData}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider;