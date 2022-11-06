import React from 'react';
import { Link } from 'react-router-dom';

function RecuperarContrasena() {
    return (
        <div>
            <br /><br />
            <div className='container-fluid p-5 w-50 bg-dark bg-opacity-10'>
                <form>
                    <fieldset>
                        <div className='row justify-content-start mb-2'>
                            <div className='col-1 py-2 '>
                                <i class="fa-sharp fa-solid fa-chevron-left"></i>
                            </div>
                            <div className='col-3 py-2'>
                                <Link className='text-center mt-2' to='/login'>
                                    Volver
                                </Link>
                            </div>
                        </div>
                        <h3>Recuperar Contraseña</h3>
                        <br />
                        <div className="form-group">
                            <label for="exampleInputEmail1" className="form-label mt-4">Correo electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite su correo electrónico" />
                        </div>
                        <br />
                        <br />
                        <div className='row justify-content-center'>
                            <button type="submit" className="btn btn-dark w-25">Recuperar</button>
                        </div>
                    </fieldset>
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

export default RecuperarContrasena;