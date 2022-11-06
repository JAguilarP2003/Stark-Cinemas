import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='sticky-top'>
      <nav className="navbar navbar-expand py-2 px-5 navbar-dark bg-dark">
        <div className="container-fluid mx-5">
          <Link className="navbar-brand m-0" to="/">
            <img src="assets/img/logo.png" alt="Logo" height="51" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item m-0">
                <Link className="nav-link" to="/cartelera">Cartelera</Link>
              </li>
              <li className="nav-item m-0">
                <Link className="nav-link" to="/estrenos">Estrenos</Link>
              </li>
              <li className="nav-item m-0">
                <Link className="nav-link" to="/preventa">Preventa</Link>
              </li>
              <li className="nav-item m-0">
                <Link className="nav-link disabled" to="/comidas">Comidas</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control form-control-sm me-1 rounded" type="text" placeholder="Buscar" />
              <button className="btn btn-secondary btn-sm rounded" type="submit">
                <i className="fa-sharp fa-solid fa-magnifying-glass fa-xl" style={{ color: "#343c44" }} />
              </button>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item dropdown mx-2">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Ciudad</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/bogota">Bogotá</a>
                  <a className="dropdown-item" href="/medellin">Medellín</a>
                  <a className="dropdown-item" href="/cali">Cali</a>
                  <a className="dropdown-item" href="/barranquilla">Barranquilla</a>
                  <a className="dropdown-item" href="/ibague">Ibagué</a>
                </div>
              </li>
              <li className="row nav-item m-0 align-items-center border rounded">
                <a className='py-2' href='/login'>
                  <i className="fa-solid fa-user fa-xl" style={{ color: "#FFD700" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;