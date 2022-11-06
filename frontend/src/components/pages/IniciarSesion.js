import React from 'react';
import { Link } from 'react-router-dom';


function IniciarSesion() {
    return (
        <div>
            <br /><br />
            <div className='container-fluid p-5 w-50 bg-dark bg-opacity-10'>
                <form>
                    <fieldset>
                        <h3>Iniciar Sesión</h3>
                        <br />
                        <div className="form-group">
                            <label for="inputCorreo" className="form-label mt-4">Correo electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite su correo electrónico" />
                        </div>
                        <br />
                        <div className="form-group">
                            <label for="inputContraseña" className="form-label mt-4">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Digite su contraseña" />
                        </div>
                        <br />
                        <br />
                        <div className='row justify-content-center'>
                            <button type="submit" className="btn btn-dark w-25">Ingresar</button>
                        </div>
                    </fieldset>
                    <br/>
                    <div className='row justify-content-center'>
                        <Link className='text-center' to='/recuperarContrasena'>
                            ¿Olvidaste tu contraseña? Recupérala aquí
                        </Link>
                    </div>
                    <hr />
                    <div className='row justify-content-center'>
                        <Link className='text-center' to='/signup'>
                            ¿No estás registrado? Regítrate aquí
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default IniciarSesion;