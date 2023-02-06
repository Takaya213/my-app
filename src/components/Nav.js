import React from "react"
import { Link } from "react-router-dom"
import useScrollPosition from '../hooks/useScrollPosition'


export const Nav = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const scrollPosition = useScrollPosition()

    return (
        <nav className={classNames( scrollPosition > 0 ? 'slim' : '' )}>
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