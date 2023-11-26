import { useContext } from 'react'
import './App.css';
import { DataContext } from './contexts/DataProvider';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import SingleAnimePage from './components/SingleAnimePage/SingleAnimePage';
import PopularAnime from './components/PopularAnime/PopularAnime';
import AiringAnime from './components/AiringAnime/AiringAnime';
import SearchResult from './components/SearchResult/SearchResult';

function App() {
  const { loader, popular, airing } = useContext(DataContext);
  return (
  <main className='app'>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/popular/:pageNum' element={<PopularAnime />}/>
      <Route path='/airing/:pageNum' element={<AiringAnime />}/>
      <Route path='/single-anime/:name/:id' element={<SingleAnimePage />} />
      {/* <Route path='/search-result/:page' element={<SearchResult/>}/> */}
    </Routes>
  <Footer/>
  </main>
  )
}

export default App
