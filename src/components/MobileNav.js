import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { Link as Url } from 'react-scroll'

import Icon from './Icons'

const MobileNav = () => {
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };
  return (
    <Menu 
      right
      noOverlay
      isOpen={isMenuOpen}
      onStateChange={handleStateChange}
    >
      <ul>
        <li><Url activeClass="active" to='about' spy={true} smooth={true} offset={0} duration={500} onClick={() => handleCloseMenu()}>About</Url></li>
        <li><Url activeClass="active" to='work' spy={true} smooth={true} offset={0} duration={500} onClick={() => handleCloseMenu()}>Work</Url></li>
        <li><Url activeClass="active" to='experience' spy={true} smooth={true} offset={0} duration={500} onClick={() => handleCloseMenu()}>Experience</Url></li>
        <li><Url activeClass="active" to='skills' spy={true} smooth={true} offset={0} duration={500} onClick={() => handleCloseMenu()}>Skills</Url></li>
        <li><Url activeClass="active" to='education' spy={true} smooth={true} offset={0} duration={500} onClick={() => handleCloseMenu()}>Education</Url></li>
        <li><Url activeClass="active" to='journal' spy={true} smooth={true} offset={0} duration={500} onClick={() => handleCloseMenu()}>Journal</Url></li>
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