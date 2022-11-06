import React from 'react';

function Cartelera() {
  return (
    <div className='container-fluid px-5'>
      <br />
      <br />
      <br />
      <h3 className='w-25'>EN CARTELERA</h3>
      <br />
      <br />
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <div className="card" style={{ width: "17rem" }}>
              <img src="assets/img/movies/CaraBlack.png" className="card-img-top" height="400" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Black Adam</h5>
                <p className="card-text">Título en inglés: Black Adam <br />
                  Estreno: 20-Oct-2022 <br />
                  Género: Acción, DC Comics, Fantasia <br />
                  Recomendada para Mayores de 12 años
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="col">
            <div className="card" style={{ width: "17rem" }}>
              <img src="assets/img/movies/CaraCenicienta.png" className="card-img-top" height="400" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Tres Deseos Para Cenienta</h5>
                <p className="card-text">Título en inglés: Three Wishes for Cinderella <br />
                  Estreno: 03-Nov-2022 <br />
                  Género: Fantasia, Romance <br />
                  Recomendada para Mayores de 7 años
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="col">
            <div className="card" style={{ width: "17rem" }}>
              <img src="assets/img/movies/CaraHabitacion.png" className="card-img-top" height="420" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Habitacion 203</h5>
                <p className="card-text">Título en inglés: Room 203 <br />
                  Estreno: 03-Nov-2022 <br />
                  Género: Terror <br />
                  Exclusiva para Mayores de 15 años
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row align-items-center">
          <div className="col">
            <div className="card" style={{ width: "17rem" }}>
              <img src="assets/img/movies/CaraLuz (1).png" className="card-img-top" height="400" alt="..." />
              <div className="card-body">
                <h5 className="card-title">La Luz del Diablo</h5>
                <p className="card-text">Título en inglés: Prey for the Devil <br />
                  Estreno: 27-Oct-2022 <br />
                  Género: Suspenso, Terror <br />
                  Recomendada para Mayores de 12 años
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "17rem" }}>
              <img src="assets/img/movies/CaraTormenta.jpg" className="card-img-top" height="405" alt="..." />
              <div className="card-body">
                <h5 className="card-title">La Gran Tormenta</h5>
                <p className="card-text">Título en inglés: Survive <br />
                  Estreno: 03-Nov-2022 <br />
                  Género: Suspenso <br />
                  Recomendada para Mayores de 12 años
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="col">
            <div className="card" style={{ width: "17rem" }}>
              <img src="assets/img/movies/CaraRed.png" className="card-img-top" height="368" alt="..." />
              <div className="card-body">
                <h5 className="card-title">One Piece Film: Red</h5>
                <p className="card-text">Título en inglés: One Piece Film: Red <br />
                  Estreno: 03-Nov-2022 <br />
                  Género: Acción, Animación, Aventura <br />
                  Recomendada para Mayores de 7 años
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}

export default Cartelera;