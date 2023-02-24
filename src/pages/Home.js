import React from "react"
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'

import Icon from '../components/Icons'
import Services from "../components/Services"
import Work from "../components/Work"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Education from "../components/Education"

function Home() {
  return (
    <>
      <Element name="about">
        <div className="hero-wrapper">
          <div className="hero-area">
            <div className='hero-text'>
              <p>Nicole Lambon</p>
              <h1>UI Designer <br />&amp; Developer</h1>
              <Link to='/' className='button button-dark button-arrow'>
                <span>Start a project</span>
                <Icon.FwdArrow style={{ color: '#FFFFFF' }} />
              </Link>
            </div>
            <div className='hero-image'>
              <Icon.GirlDesk />
            </div>
          </div>
        </div>
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="education">
        <Education />
      </Element>
    </>
  );
}

export default Home
