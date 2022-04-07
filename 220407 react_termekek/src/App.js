import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import TermekListPage from './TermekListPage';
import TermekSinglePage from './TermekSinglePage';
import TermekCreatePage from './TermekCreatePage';
import TermekUpdate from './TermekUpdate';
import TermekUpdatePage from './TermekUpdatePage';
import TermekDeletePage from './TermekDeletePage';
import TermekDelete from './TermekDelete';

function App() {
  return (
    <BrowserRouter>
    <nav className='navbar-expand-sm bg-secondary'>
        <ul className='navbar-nav'>
          <li>
            <NavLink to={'/'} className='nav-link'>
              Termékek
            </NavLink>
            </li>
            <li> 
            <NavLink to={'/uj-termek'} className='nav-link'>
              Új termék
            </NavLink>
            </li>
            <li> 
            <NavLink to={'/modositas'} className='nav-link'>
              Módosítás
            </NavLink>
            </li>
            <li> 
            <NavLink to={'/torles'} className='nav-link'>
              Törlés
            </NavLink>
            </li>
        </ul>
    </nav>
    <Routes>
      <Route path='/' exact element={<TermekListPage/>} ></Route>
      <Route path='/termek/:termekId' element={<TermekSinglePage/>}></Route>
      <Route path='/uj-termek' element={<TermekCreatePage/>}></Route>
      <Route path='/modositas' element={<TermekUpdatePage/>}></Route>
      <Route path='/modositas/:termekId' element={<TermekUpdate/>}></Route>
      <Route path='/torles' element={<TermekDeletePage/>}></Route>
      <Route path='/torles/:termekId' element={<TermekDelete/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
