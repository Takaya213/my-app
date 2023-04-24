import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Link as Url } from 'react-scroll'

export const DesktopNav = () => {
  const location = useLocation()

  if (location.pathname === '/') {
    return (
      <nav id='nav'>
        <ul>
          <li>
            <Url activeClass='active' to='about' spy={true} smooth={true} offset={-120} duration={500}>
              About
            </Url>
          </li>
          <li>
            <Url activeClass='active' to='work' spy={true} smooth={true} offset={-120} duration={500}>
              Work
            </Url>
          </li>
          <li>
            <Url activeClass='active' to='experience' spy={true} smooth={true} offset={0} duration={500}>
              Experience
            </Url>
          </li>
          <li>
            <Url activeClass='active' to='skills' spy={true} smooth={true} offset={0} duration={500}>
              Skills
            </Url>
          </li>
          <li>
            <Url activeClass='active' to='education' spy={true} smooth={true} offset={0} duration={500}>
              Education
            </Url>
          </li>
          {/* <li><Url activeClass="active" to='journal' spy={true} smooth={true} offset={0} duration={500}>Journal</Url></li> */}
        </ul>
      </nav>
    )
  }
  return (
    <nav id='nav'>
      <ul>
        <li>
          <Link activeClass='active' to='/#about'>
            About
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='/#work'>
            Work
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='/#experience'>
            Experience
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='/#skills'>
            Skills
          </Link>
        </li>
        <li>
          <a href='/#education'>Education</a>
        </li>
        {/* <li><Link activeClass="active" to='journal' spy={true} smooth={true} offset={0} duration={500}>Journal</Link></li> */}
      </ul>
    </nav>
  )
}
