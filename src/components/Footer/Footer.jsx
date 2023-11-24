import React from 'react'
import styles from './Footer.module.css';
import flag from '../../assets/images/flag.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to={-1} className={styles.logoBox}>
        <img src={flag} alt="one piece flag logo used as anipedia logo" />
      </Link>
      <ul className={styles.socialUl}>
        <li className={styles.socialLi}>
          <a href='https://twitter.com/parmarSKY_' target='_blank'>
            <i className="ri-twitter-line"></i>
          </a>
        </li>
        <li className={styles.socialLi}>
          <a href='https://www.linkedin.com/in/akash-parmar-/' target='_blank'>
            <i className="ri-linkedin-line"></i>
          </a>
        </li>
        <li className={styles.socialLi}>
          <a href='http://discordapp.com/users/558636559755247616' target='_blank'>
            <i className="ri-discord-line"></i>
          </a>
        </li>
        <li className={styles.socialLi}>
          <a href='https://github.com/Akash-cloud001' target='_blank'>
            <i className="ri-github-line"></i>
          </a>
        </li>
      </ul>
      <div className={styles.benchmark}>
      <i className="ri-copyright-line"></i> 2023 Anipedia. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;