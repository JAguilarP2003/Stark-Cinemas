import React from 'react'

function Preventa (){
  return (
    <div className='container-fluid px-5'>
      <br />
      <br />
      <br />
      <h3 className='w-25'>PREVENTA</h3>
      <br />
      <br />
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <div className="card" style={{width: "17rem"}}>
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
          <div className="col">
            <div className="card" style={{width: "17rem"}}>
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
      </div>
    </div>
  )
}

export default Preventa;
