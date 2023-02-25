import React from "react"
import { Element } from 'react-scroll'

import PageTitle from "../components/PageTitle"
import Icon from '../components/Icons'
import Services from "../components/Services"
import Work from "../components/Work"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Education from "../components/Education"
import StartProject from "../components/StartProject"

function Home() {
  return (
    <PageTitle title='Welcome'>
      <Element name="about">
        <div className="hero-wrapper">
          <div className="hero-area">
            <div className='hero-text'>
              <p>Nicole Lambon</p>
              <h1>UI Designer <br />&amp; Developer</h1>
              <StartProject />
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
    </PageTitle>
  );
}

export default Home
