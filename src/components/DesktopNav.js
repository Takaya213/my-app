import React from 'react'
import { Link } from 'react-router-dom'


export const DesktopNav = () => {
    return (
        <nav id="nav">
            <ul>
                <li><Link activeClass="active" to='/'>About</Link></li>
                <li><Link activeClass="active" to='work'>Work</Link></li>
                <li><Link activeClass="active" to='experienc'>Experience</Link></li>
                <li><Link activeClass="active" to='skills'>Skills</Link></li>
                <li><Link activeClass="active" to='education'>Education</Link></li>
                <li><Link activeClass="active" to='journal'>Journal</Link></li>
            </ul>
        </nav>
    )  
}