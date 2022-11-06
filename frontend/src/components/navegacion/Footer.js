import React from 'react'

function Footer() {
  return (
    <div>
      <br /><br />
      <div className='container-fluid px-5 text-center' style={{ height: "250px", backgroundColor: "gold" }}>
        <div className="row align-items-center px-5 pt-5">
          <div className="col-1">
            <img src='assets/img/logo2.png' alt='logo' width="150" />
          </div>
          <div className="col-10">
            <a className="text-dark fs-6 fw-bold p-2" href='/'>Información Legal</a>
            <a className="text-dark fs-6 fw-bold p-2 border-dark border-start" href='/'>Acerca de Stark Cinemas</a>
            <a className="text-dark fs-6 fw-bold p-2 border-dark border-end border-start" href='/'>Contáctanos PQRS</a>
            <a className="text-dark fs-6 fw-bold p-2" href='/'>Preguntas Frecuentes</a>
          </div>
        </div>
        <div className="row align-items-center px-5 pt-5">
          <div className='text-center'>
            ©2022 Stark Cinemas
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;