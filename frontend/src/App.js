import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navegacion/Navbar';
import Inicio from './components/pages/Inicio';
import Cartelera from './components/pages/Cartelera';
import Estrenos from './components/pages/Estrenos';
import Preventa from './components/pages/Preventa';
import Footer from './components/navegacion/Footer';
import IniciarSesion from './components/pages/IniciarSesion';
import RecuperarContrasena from './components/pages/RecuperarContrasena';
import Signup from './components/pages/Signup';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} exact></Route>
          <Route path='/cartelera' element={<Cartelera />} exact></Route>
          <Route path='/estrenos' element={<Estrenos />} exact></Route>
          <Route path='/preventa' element={<Preventa />} exact></Route>
          <Route path='/login' element={<IniciarSesion />} exact></Route>
          <Route path='/recuperarContrasena' element={<RecuperarContrasena />} exact></Route>
          <Route path='/signup' element={<Signup/>} exact></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
