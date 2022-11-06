import React from 'react';
import { Link } from 'react-router-dom';
import Cartelera from './Cartelera';
import Estrenos from './Estrenos';


function Inicio() {
  return (
    //Carrusel
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <Link to="/">
              <img src="assets/img/movies/black-adam.jpg" className="d-block w-100" height="470" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                {/* <h5 className="text-light bg-dark">Black Adam</h5>
                <p className="text-light bg-dark">lorem ipsum</p> */}
              </div>
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <Link to="/">
              <img src="assets/img/movies/cenicienta.jpg" className="d-block w-100" height="470" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5 className="text-light bg-dark">Cenicienta</h5>
                <p className="text-light bg-dark">Lorem ipsum</p> */}
              </div>
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <Link to="/">
              <img src="assets/img/movies/habitacion203.jpg" className="d-block w-100" height="470" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5 className="text-light bg-dark">Habitación 203</h5>
                <p className="text-light bg-dark">Lorem ipsum</p> */}
              </div>
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <Link to="/">
              <img src="assets/img/movies/luz.png" className="d-block w-100" height="470" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5 className="text-light bg-dark">La Luz del Diablo</h5>
                <p className="text-light bg-dark">Lorem ipsum</p> */}
              </div>
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <Link to="/">
              <img src="assets/img/movies/grantormenta.jpg" className="d-block w-100" height="470" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5 className="text-light bg-dark">Gran Tormenta</h5>
                <p className="text-light bg-dark">Lorem ipsum</p> */}
              </div>
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <Link to="/">
              <img src="assets/img/movies/red.webp" className="d-block w-100" height="470" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5 className="text-light bg-dark">One Piece Film: Red</h5>
                <p className="text-light bg-dark">Lorem ipsum</p> */}
              </div>
            </Link>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Cartelera/>
      <br/><br/>
      <Estrenos/>
    </div>
  )
}

export default Inicio;