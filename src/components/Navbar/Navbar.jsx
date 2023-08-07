import React, { useState } from 'react';
import styles from './Navbar.module.css';
const Navbar = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    // call the api with the search string and redirect to the dedicated page of that particular anime
    setText('');
  }

  return (
    <div className={styles.nav}>
      <header className={styles.header}>
        <span>ANI</span>&nbsp;<span>PEDIA</span>
      </header>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input className={styles.input} type='text' placeholder='Search anime...' value={text} onChange={(e)=>setText(e.target.value)}/>
            <button className={styles.button} type='submit'>
              <i className="ri-search-2-line"></i>
            </button>
          </form>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;