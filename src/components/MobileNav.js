import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link as Url } from 'react-scroll'
import Modal from 'react-modal'

import ContactForm from './ContactForm'
import Icon from './Icons'

const customStyles = {
  content: {
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    display: "flex",
  },
};
const MobileNav = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  }

  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };
  return (
    <Menu 
      right
      noOverlay
      isOpen={isMenuOpen}
      onStateChange={handleStateChange}
    >
      <ul>
        <li><Url activeClass="active" to='about' spy={true} smooth={true} offset={-98} duration={500} onClick={() => handleCloseMenu()}>About</Url></li>
        <li><Url activeClass="active" to='work' spy={true} smooth={true} offset={-98} duration={500} onClick={() => handleCloseMenu()}>Work</Url></li>
        <li><Url activeClass="active" to='experience' spy={true} smooth={true} offset={-98} duration={500} onClick={() => handleCloseMenu()}>Experience</Url></li>
        <li><Url activeClass="active" to='skills' spy={true} smooth={true} offset={-98} duration={500} onClick={() => handleCloseMenu()}>Skills</Url></li>
        <li><Url activeClass="active" to='education' spy={true} smooth={true} offset={-98} duration={500} onClick={() => handleCloseMenu()}>Education</Url></li>
        {/* <li><Url activeClass="active" to='journal' spy={true} smooth={true} offset={0} duration={500} onClick={() => handleCloseMenu()}>Journal</Url></li> */}
        <li>
            <button className='button button-dark-border button-arrow' onClick={openModal}>
                <span>Let's talk</span>
                <Icon.FwdArrow style={{ color: '#FFFFFF' }} />
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="contact">
                <button className="close-btn" onClick={closeModal}>
                  <span>Close</span>
                  <Icon.CloseBtn />
                </button>
                <h2>Let's Talk.</h2>
                <div>
                  <ContactForm />
                </div>
              </div>
            </Modal>
        </li>
      </ul>
    </Menu>
  )
}

export default MobileNav