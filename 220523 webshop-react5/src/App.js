import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import KategoriaListPage from './KategoriaListPage';
import KategoriaCreatePage from './KategoriaCreatePage';
import KategoriaUpdatePage from './KategoriaUpdatePage';
import KategoriaDeletePage from './KategoriaDeletePage';
import KategoriaSinglePage from './KategoriaSinglePage';

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar-expand-sm bg-secondary'>
        <ul className='navbar-nav'>
          <li>
            <NavLink className='nav-link' to={'/'}>
              Kategóriák
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to={'/uj-kategoria'}>
              Új kategória
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<KategoriaListPage />}></Route>
        <Route path='/uj-kategoria' element={<KategoriaCreatePage />}></Route>
        <Route path='/modositas/:kategoriaId' element={<KategoriaUpdatePage />}></Route>
        <Route path='/torles/:kategoriaId' element={<KategoriaDeletePage />}></Route>
        <Route path='/kategoria/:kategoriaId' element={<KategoriaSinglePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
