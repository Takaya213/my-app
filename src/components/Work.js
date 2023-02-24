import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '../components/Icons'
import GamingEvolved from '../assets/images/gaming-evolved.png'
import Glam from '../assets/images/glamour-sa.png'
import HAG from '../assets/images/hag.png'

function Work() {
  return (
      <div className='wrapper'>
        <h2>Featured works.</h2>
        <div className='inner-wrapper'>
          <div className='work'>
            <div className='work-content'>
              <div>
                <p className='small txt-dark-grey'>UI Design, Web Development, Craft CMS</p>
                <h3>Gaming Evolved</h3>
                <p className='txt-dark-grey'>High-end game server hosting company with a vast array of games to choose from.</p>
              </div>
              <Link to='/' className='button button-dark button-arrow'>
                <span>View case study</span>
                <Icon.FwdArrow style={{ color: '#FFFFFF' }} />
              </Link>
            </div>
            <div className='work-img'>
              <div className='fade'></div>
              <img src={GamingEvolved} alt=''/>
            </div>
          </div>
          <div className='work'>
            <div className='work-content'>
              <div>
                <p className='small txt-dark-grey'>UI Design, Web Development</p>
                <h3>Glamour SA</h3>
                <p className='txt-dark-grey'>Latest news on your favourite celebs, fashion trends and relationship advice.</p>
              </div>
              <Link to='/' className='button button-dark button-arrow'>
                <span>View case study</span>
                <Icon.FwdArrow style={{ color: '#FFFFFF' }} />
              </Link>
            </div>
            <div className='work-img'>
              <div className='fade'></div>
              <img src={Glam} alt=''/>
            </div>
          </div>
          <div className='work'>
            <div className='work-content'>
              <div>
                <p className='small txt-dark-grey'>UI Design, Web Development</p>
                <h3>House &amp; Garden</h3>
                <p className='txt-dark-grey'>South Africa's premier design, décor and lifestyle magazine.</p>
              </div>
              <Link to='/' className='button button-dark button-arrow'>
                <span>View case study</span>
                <Icon.FwdArrow style={{ color: '#FFFFFF' }} />
              </Link>
            </div>
            <div className='work-img'>
              <div className='fade'></div>
              <img src={HAG} alt=''/>
            </div>
          </div>
          <div className='button-center'>
            <Link to='/' className='button button-grey button-arrow'>
                <span>More works</span>
                <Icon.FwdArrow style={{ color: '#121212' }} />
            </Link>
          </div>
        </div>
      </div>
  )
}

export default Work