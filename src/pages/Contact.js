import React from 'react'

import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <PageTitle title='Contact'>
      <div className="wrapper contact-page">
        <div className="inner-wrapper contact">
          <h2>Let's Talk.</h2>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </PageTitle>
  );
}

export default Contact