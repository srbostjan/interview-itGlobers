import React from 'react'
import { useState } from 'react';
export const Form = ({ name }) => {
  const [state, setState] = useState({})
  return(
    <div className="form">
    <h1>Tus datos </h1>
    <p>{name ?
    'Hola, bienvinido, sabemos que quieres viajar en un ' + name :
    'Hola, bienvenido'}</p>
    <p>por favor diligencia el siguiente formulario:</p>
    <form>
      <input type="text" placeholder="Nombre completo" />
      <input type="email" placeholder="Correo" />
      <input type="number" placeholder="telefono" />
      <input type="number" min="18" max="100" placeholder="edad" />
    </form>
    <button type="button">Enviar</button>
    </div>
  );
};
