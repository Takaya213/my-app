import React from "react"
import { Link } from "react-router-dom"

import Logo from '../assets/images/nicole.svg';

function Header() {
  return (
    <header>
        <Link to='/'><img src={Logo} alt='Nicole.' /></Link>
        <nav>
            <ul>
                <li><Link activeClass="active" to='/'>About</Link></li>
                <li><Link activeClass="active" to='work'>Work</Link></li>
                <li><Link activeClass="active" to='experienc'>Experience</Link></li>
                <li><Link activeClass="active" to='skills'>Skills</Link></li>
                <li><Link activeClass="active" to='education'>Education</Link></li>
                <li><Link activeClass="active" to='journal'>Journal</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header