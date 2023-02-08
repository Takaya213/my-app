import React from "react"
import { Link } from 'react-router-dom'

import Icon from '../components/icons'

function Home() {
  return (
    <div className="hero-wrapper">
      <div className="hero-area">
        <div className='hero-text'>
          <p>Nicole Lambon</p>
          <h1>UI Designer <br />&amp; Developer</h1>
          <Link to='/' className='button button-dark button-arrow'>
            <span>Start a project</span>
            <Icon.FwdArrow  style={{ color: '#FFFFFF' }} />
          </Link>
        </div>
        <div className='hero-image'>
          <Icon.GirlDesk />
        </div>
      </div>
    </div>
  );
}

export default Home
