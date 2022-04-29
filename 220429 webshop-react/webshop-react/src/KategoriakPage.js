import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function KategoriakPage() {
  const [kategoriak, setKategoriak] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://localhost:7082/api/Kategoriak`)
      .then(res => res.json())
      .then(kategoriak => { setKategoriak(kategoriak); console.log(kategoriak); })
      .catch(error => console.log(error));
  }, []);


  return (
    <div className='text-center mt-2'>
      <h2>Kategóriák</h2>
      {kategoriak.map(kategoria => (
        <div className='row p-3 border-bottom' key={kategoria.id}>
          {/* <NavLink className="nolink" to={"/kategoria/" + kategoria.id}> */}
          <div className='col-sm-2 align-self-center'>
            <NavLink className="nolink" to={"/kategoria/" + kategoria.id}>
              {kategoria.megnevezes}
            </NavLink>
          </div>
          <div className='col-sm-4 align-self-center'>
            <NavLink className="nolink" to={"/kategoria/" + kategoria.id}>
              {kategoria.leiras}
            </NavLink>
          </div>
          <div className='col-sm-4 align-self-center'>
            <NavLink className="nolink" to={"/kategoria/" + kategoria.id}>
              <img className='img-fluid p-2' src={`/images/${kategoria.kepek}`} alt={kategoria.megnevezes} title={kategoria.megnevezes} />
            </NavLink>
          </div>
          {/* </NavLink> */}
          <div className='col-sm-1 align-self-center'>
            <div>
              <button className='btn btn-info mb-3' onClick={() => navigate("/modositas/" + kategoria.id)}>Módosítás</button>
            </div>
            <button className='btn btn-danger mb-3' onClick={() => navigate("/torles/" + kategoria.id)}>Törlés</button>
          </div>
        </div>
      ))
      }
    </div>
  )
}

export default KategoriakPage