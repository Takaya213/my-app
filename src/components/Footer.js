import React from 'react'

import Button from './Button'

function Footer() {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div>
          <h2>
            Turn your brand <br />
            into a great one.
          </h2>
          <Button styleClass='button-light' text="Let's talk" colour='#121212' />
        </div>
      </div>
      <div className='footer-wrapper'>
        <div className='copyright'>
          <p>{new Date().getFullYear()} &copy; Copyright Nicole Lambon</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
