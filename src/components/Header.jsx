import React from 'react'
import  { Link } from 'react-router-dom'
import { data } from '../resources/data'

export const Header = () => {
  const aviones = data.aviones
  addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.getElementById('btn-menu')
    const nav_menu = document.querySelector('.nav-menu')
    const handleShow = () => {
      nav_menu.classList.toggle('show')
    }
    btn_menu.addEventListener('click', () => {
      handleShow()
    })
  })
  return (
    <header className="header">
      <nav>
        <div>
          <img src="https://i.ibb.co/KmKms4b/1629431240956.png" alt="logo" className="logo"/>
        </div>
        <ul className="nav-menu">
          {
            aviones.map( avion => {
            return <li key={avion.id} ><Link to={'/'+ avion.id}>{avion.name}</Link></li>
          })}
        </ul>
        <span className="btn-menu" id="btn-menu">
          <i className="fa fa-bars"></i>
        </span>
      </nav>
    </header>
  )
}