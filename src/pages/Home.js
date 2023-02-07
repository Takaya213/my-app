import React from "react"
import { Link } from 'react-router-dom'

import Icon from '../components/icons'

function Home() {
  return (
    <div className="App">
      <div className='hero-text'>
        <p>Nicole Lambon</p>
        <p>UI Designer &amp; Developer</p>
        <Link to='/' className='button button-arrow button-arrow-dark'>
          <span>Start a project</span>
          <Icon.FwdArrow  style={{ color: '#FFFFFF' }} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
