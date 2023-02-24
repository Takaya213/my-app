import React from "react"
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import { Link as Url } from 'react-scroll'

import Icon from './Icons'

function MobileNav() {
  return (
    <Menu right noOverlay>
        <ul>
          <li><Url activeClass="active" to='about' spy={true} smooth={true} offset={0} duration={500}>About</Url></li>
          <li><Url activeClass="active" to='work' spy={true} smooth={true} offset={0} duration={500}>Work</Url></li>
          <li><Url activeClass="active" to='experience' spy={true} smooth={true} offset={0} duration={500}>Experience</Url></li>
          <li><Url activeClass="active" to='skills' spy={true} smooth={true} offset={0} duration={500}>Skills</Url></li>
          <li><Url activeClass="active" to='education' spy={true} smooth={true} offset={0} duration={500}>Education</Url></li>
          <li><Url activeClass="active" to='journal' spy={true} smooth={true} offset={0} duration={500}>Journal</Url></li>
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