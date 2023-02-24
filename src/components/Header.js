import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/nicole.svg'
import useScrollPosition from '../hooks/useScrollPosition'
import Icon from './icons'
import { DesktopNav } from './DesktopNav'
import MobileNav from './MobileNav'

export const Header = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const scrollPosition = useScrollPosition()
  return (
    <header className={classNames( scrollPosition > 0 ? 'slim' : '' )}r>
      <div>
        <Link to='/'><img src={Logo} alt='Nicole.' /></Link>
        <DesktopNav />
        <Link to='/' className='button button-light button-arrow'>
          <span>Let's talk</span>
          <Icon.FwdArrow style={{ color: '#121212' }} />
        </Link>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header