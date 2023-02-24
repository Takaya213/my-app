import React from "react"
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

import Icon from './icons'

function MobileNav() {
  return (
    <Menu right noOverlay>
        <ul>
        <li><Link activeClass="active" to='/'>About</Link></li>
        <li><Link activeClass="active" to='work'>Work</Link></li>
        <li><Link activeClass="active" to='experienc'>Experience</Link></li>
        <li><Link activeClass="active" to='skills'>Skills</Link></li>
        <li><Link activeClass="active" to='education'>Education</Link></li>
        <li><Link activeClass="active" to='journal'>Journal</Link></li>
        <li>
            <Link to='/' className='button button-dark-border button-arrow'>
                <span>Let's talk</span>
                <Icon.FwdArrow style={{ color: '#FFFFFF' }} />
            </Link>
        </li>
        </ul>
    </Menu>
  )
}

export default MobileNav