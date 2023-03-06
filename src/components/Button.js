import React, { useState } from 'react'
import Modal from 'react-modal'

import ContactForm from './ContactForm'
import Icon from './Icons'

const customStyles = {
  content: {
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    display: 'flex'
  }
}

function Button(props) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }

  function closeModal() {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <button onClick={openModal} className={'button button-arrow ' + props.styleClass}>
        <span>{props.text}</span>
        <Icon.FwdArrow style={{ color: props.colour }} />
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel='Lets Talk'>
        <div className='contact'>
          <button className='close-btn' onClick={closeModal}>
            <span>Close</span>
            <Icon.CloseBtn />
          </button>
          <h2>Let's Talk.</h2>
          <div>
            <ContactForm />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Button
