import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/nicole.svg'
import useScrollPosition from '../hooks/useScrollPosition'
import { DesktopNav } from './DesktopNav'
import MobileNav from './MobileNav'
import Button from './Button'

export const Header = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const scrollPosition = useScrollPosition()
  return (
    <header className={classNames(scrollPosition > 0 ? 'slim' : '')} r>
      <div>
        <Link to='/'>
          <img src={Logo} alt='Nicole.' />
        </Link>
        <DesktopNav />
        <Button styleClass='button-light' text="Let's talk" colour='#121212' />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
