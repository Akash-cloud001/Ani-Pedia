import { useContext } from 'react'
import './App.css';
import { DataContext } from './contexts/DataProvider';
import Loading from './components/Loader/Loading';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import SingleAnimePage from './components/SingleAnimePage/SingleAnimePage';
import PopularAnime from './components/PopularAnime/PopularAnime';
import AiringAnime from './components/AiringAnime/AiringAnime';

function App() {
  const { loader } = useContext(DataContext);
  return (
    <main className='app'>
    <Navbar />
      <Routes>
        <Route path='/' element={ loader? <Loading/>:<Home/>} />
        <Route path='/popular' element={<PopularAnime />}/>
        <Route path='/airing' element={<AiringAnime />}/>
        <Route path='/single-anime/:name/:id' element={<SingleAnimePage />} />
      </Routes>
    <Footer/>
    </main>
  )
}

export default App
