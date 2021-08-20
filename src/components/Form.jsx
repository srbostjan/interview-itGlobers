import React from 'react'
import { useState } from 'react';
import { Lightbox } from './Lightbox'

export const Form = ({ name }) => {
  const [state, setState] = useState({
    fullname: '',
    email: '',
    phone: '',
    age: '',
  })
  const [lightbox, setlightbox] = useState(false)
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }
  const createLightbox = () => {
    setlightbox(true)
    console.log(state)
    setTimeout(() => {
      setlightbox(false)
      setState({})
    }, 5000)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(state.fullname && state.email && state.phone && state.age) {
      const validateName = state.fullname.split(' ').length > 2
      const validateEmail = state.email.includes('@')
      const validateAge = state.age >= 18 && state.age <= 100
      const validatePhone = state.phone.length >= 10 && state.phone.length <= 15
      validateEmail === false ?
      alert('Escriba un correo electronico valido'):
      validateAge === false ?
      alert('Escriba una edad entre 18 y 100 años'):
      validatePhone === false ?
      alert('Escriba un telefono valido'):
      validateName === false ?
      alert('Escriba su nombre completo'):
      createLightbox()
    } else {
      alert('llenar todos los datos')
    }
  }
  return(
    <>
      <div className="form">
      <h1>Tus datos </h1>
      <p>{name ?
      'Hola, bienvinido, sabemos que quieres viajar en un ' + name :
      'Hola, bienvenido'}</p>
      <p>por favor diligencia el siguiente formulario:</p>
      <form>
        <input type="text" name="fullname" onChange={handleChange} value={state.fullname} placeholder="Nombre completo" required />
        <input type="email" name="email" onChange={handleChange} value={state.email} placeholder="Correo" required />
        <input type="number" name="phone" onChange={handleChange} value={state.phone} placeholder="telefono" required />
        <input type="number" name="age" onChange={handleChange} value={state.age} min="18" max="100" placeholder="edad" required />
      </form>
      <button type="button" onClick={handleSubmit}>Enviar</button>
      </div>
      <Lightbox isOpen={lightbox}/>
    </>
  );
};
