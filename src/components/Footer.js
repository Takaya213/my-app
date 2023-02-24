import React from "react"
import { Link } from 'react-router-dom'

import Icon from './Icons'

function Footer() {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div>
          <h2>Turn your brand <br />into a great one.</h2>
          <Link to='/' className='button button-light button-arrow'>
            <span>Let's talk</span>
            <Icon.FwdArrow style={{ color: '#121212' }} />
          </Link>
        </div>
      </div>
      <div className='footer-wrapper'>
        <div className='copyright'>
          <p>{new Date().getFullYear()} &copy; Copyright Nicole Lambon</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer