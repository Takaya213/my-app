import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Icon from '../components/Icons'

function Services() {
  return (
    <div className='wrapper'>
        <div className='inner-wrapper services'>
            <Link to='' className='service active'>
            <div className='icon'>
                <Icon.WebDev style={{ color: '#FFFFFF' }} />
            </div>
            <h4>Web Development</h4>
            <p className='small txt-dark-grey'>HTML, CSS and CMS Integration for effortless updates.</p>
            <div className='arrow'>
                <Icon.FwdArrow style={{ color: '#FFFFFF' }} />
            </div>
            </Link>
            <Link to='' className='service'>
            <div className='icon'>
                <Icon.UxUi style={{ color: '#121212' }} />
            </div>
            <h4>UX &amp; UI Design</h4>
            <p className='small txt-dark-grey'>High fidelity designs for your website or app in Figma.</p>
            <div className='arrow'>
                <Icon.FwdArrow style={{ color: '#121212' }} />
            </div>
            </Link>
            <Link to='' className='service'>
            <div className='icon'>
                <Icon.Access style={{ color: '#121212' }} />
            </div>
            <h4>Accessibility</h4>
            <p className='small txt-dark-grey'>Designed and developed to be accessible by all.</p>
            <div className='arrow'>
                <Icon.FwdArrow style={{ color: '#121212' }} />
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Services