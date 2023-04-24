import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()
  const [statusMessage, setStatusMessage] = useState(false)

  const sendEmail = e => {
    e.preventDefault()

    emailjs.sendForm('service_lfgbvzl', 'template_ea9xc0o', form.current, 'o6AVEsusIYyo9PSdv').then(
      result => {
        setStatusMessage('Thank you for your enquiry.')
      },
      error => {
        console.log(error.text)
      }
    )
  }
  if (statusMessage) {
    return <h4>{statusMessage}</h4>
  } else {
    return (
      <form ref={form} onSubmit={sendEmail}>
        <div className='form-item'>
          <label htmlFor='user_ma,e'>Name:</label>
          <input type='text' name='user_name' required />
        </div>
        <div className='form-item'>
          <label htmlFor='user_email'>Email:</label>
          <input type='email' name='user_email' required />
        </div>
        <div className='form-item'>
          <label htmlFor='message'>Project Brief:</label>
          <textarea name='message' rows='5' required />
        </div>
        <input type='submit' value='Send Brief' />
      </form>
    )
  }
}

export default ContactForm
