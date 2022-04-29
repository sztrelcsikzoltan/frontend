import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import KategoriakPage from './KategoriakPage';
import KategoriaCreatePage from './KategoriaCreatePage';
import KategoriaPage from './KategoriaPage';
import KategoriaUpdatePage from './KategoriaUpdatePage';
import KategoriaDeletePage from './KategoriaDeletePage';

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar-expand-sm bg-secondary'>
        <ul className='navbar-nav'>
          <li>
            <NavLink className="nav-link" to={"/"}>
              Kategóriák
            </NavLink>
          </li>
          <li className='navbar-nav'>
            <NavLink className="nav-link" to={"/uj-kategoria"}>
              Új kategória
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<KategoriakPage />}></Route>
        <Route path='/kategoria/:kategoriaId' element={<KategoriaPage />}></Route>
        <Route path='/uj-kategoria' element={<KategoriaCreatePage />}></Route>
        <Route path='/modositas/:kategoriaId' element={<KategoriaUpdatePage />}></Route>
        <Route path='/torles/:kategoriaId' element={<KategoriaDeletePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
