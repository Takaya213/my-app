import React from 'react'
import { Link } from 'react-scroll'

export const DesktopNav = () => {
    return (
        <nav id="nav">
            <ul>
                <li><Link activeClass="active" to='about' spy={true} smooth={true} offset={0} duration={500}>About</Link></li>
                <li><Link activeClass="active" to='work' spy={true} smooth={true} offset={0} duration={500}>Work</Link></li>
                <li><Link activeClass="active" to='experience' spy={true} smooth={true} offset={0} duration={500}>Experience</Link></li>
                <li><Link activeClass="active" to='skills' spy={true} smooth={true} offset={0} duration={500}>Skills</Link></li>
                <li><Link activeClass="active" to='education' spy={true} smooth={true} offset={0} duration={500}>Education</Link></li>
                <li><Link activeClass="active" to='journal' spy={true} smooth={true} offset={0} duration={500}>Journal</Link></li>
            </ul>
        </nav>
    )  
}