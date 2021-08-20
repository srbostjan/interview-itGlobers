import React from 'react'
import ReactDOM from 'react-dom'

export const Lightbox = (props) => {
  if(!props.isOpen) {
    return null
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <figure>
        <img src="https://i.ibb.co/p34VyCT/success.png" alt="success icon" />
      </figure>
      <h1>Tu informacion fue enviada con exito, estaremos en contacto contigo</h1>
    </div>,
    document.getElementById('lightbox')
  )
}