import { useContext, useState } from 'react'
import './App.css';
import { DataContext } from './contexts/DataProvider';
import Loading from './components/Loader/Loading';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
function App() {
  const { loader } = useContext(DataContext);
  return (
    <main className='app'>
      {loader ? 
        <Loading /> : 
        <>
          <Navbar/>
          <Home/>
          <Footer/>
        </>
      }
    </main>
  )
}

export default App
