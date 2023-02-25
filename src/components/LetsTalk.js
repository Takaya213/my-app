import React from 'react'
import Modal from 'react-modal';

import ContactForm from './ContactForm';
import Icon from './Icons';

const customStyles = {
  content: {
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    display: 'flex'
  },
};

function LetsTalk() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true)
        document.body.style.overflow = 'hidden'
    }

    function closeModal() {
        setIsOpen(false)
        document.body.style.overflow = 'unset';
    }
  return (
    <>
      <button onClick={openModal} className="button button-light button-arrow">
        <span>Let's talk</span>
        <Icon.FwdArrow style={{ color: "#121212" }} />
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
    </>
  )
}

export default LetsTalk