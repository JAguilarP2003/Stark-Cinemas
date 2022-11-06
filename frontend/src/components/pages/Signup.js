import React from 'react';

function Signup() {
  return (
    <div>
      <br /><br />
      <div className='container-fluid p-5 w-50 bg-dark bg-opacity-10'>
        <form>
          <fieldset>
            <h3>Registro</h3>
            <br />
            <div className="form-group">
              <label for="inputCorreo" className="form-label mt-4">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
            </div>
            <div className="form-group">
              <label for="inputCorreoConfir" className="form-label mt-4">Confirmar email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Confirmar email" />
            </div>
            <div className="form-group">
              <label for="inputContraseña" className="form-label mt-4">Contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
            </div>
            <div className="form-group">
              <label for="inputContraseñaConfir" className="form-label mt-4">Confirmar contraseña</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirmar contraseña" />
            </div>
            <div className='form-group'>
              <label class="col-form-label mt-4" for="inputNombres">Nombres</label>
              <input type="text" class="form-control" placeholder="Nombres" id="inputDefault" />
            </div>
            <div className='form-group'>
              <label class="col-form-label mt-4" for="inputApellidos">Apellidos</label>
              <input type="text" class="form-control" placeholder="Apellidos" id="inputDefault" />
            </div>
            <div className='form-group'>
              <label for="tipoDocumento" class="form-label mt-4">Documento de Identidad</label>
              <div className='row justify-content-start'>
                <div className='col-5'>
                  <select multiple="" class="form-select" id="exampleSelect2">
                    <option>Cédula de ciudadanía</option>
                    <option>Pasaporte</option>
                    <option>Cédula de extranjería</option>
                  </select>
                </div>
                <div className='col-7'>
                  <input type="text" class="form-control" id="inputDefault" />
                </div>
              </div>
            </div>
            <div className='form-group'>
              <label class="col-form-label mt-4" for="inputCel">Celular</label>
              <input type="text" class="form-control" placeholder="Celular" id="inputDefault" />
            </div>
            <br />
            <br />
            <div className='row justify-content-center'>
              <button type="submit" className="btn btn-dark w-25">Ingresar</button>
            </div>
          </fieldset>
          <br />
        </form>
      </div>
    </div>
  )
}

export default Signup;