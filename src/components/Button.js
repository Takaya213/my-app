import React, { useState } from 'react'

import Icon from './Icons'

function Button(props) {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }
  return (
    <button onClick={openModal} className={'button button-arrow ' + props.styleClass}>
      <span>{props.text}</span>
      <Icon.FwdArrow style={{ color: props.colour }} />
    </button>
  )
}

export default Button
