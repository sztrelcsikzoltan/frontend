import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function KategoriaListPage() {
    const [kategoriak, setKategoriak] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://localhost:7082/api/kategoriak`)
            .then(res => res.json())
            .then(kategoriak => { setKategoriak(kategoriak); console.log(kategoriak); })
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='text-center m-2'>
            <h2>Kategóriák</h2>
                {kategoriak.map(kategoria => (
                <div className='row border-bottom p-1' key={kategoria.id}>
                    <div className='col-sm-2 align-self-center'>
                        <NavLink className='no-decor' to={'kategoria/' + kategoria.id}>
                            {kategoria.megnevezes}
                        </NavLink>
                    </div>
                    <div className='col-sm-4 align-self-center small'>
                        <NavLink className='no-decor' to={'kategoria/' + kategoria.id}>
                            {kategoria.leiras}
                        </NavLink>
                    </div>
                    <div className='col-sm-4 align-self-center'>
                        <NavLink className='no-decor' to={'kategoria/' + kategoria.id}>
                            <img className='img-fluid p-2' src={`./images/${kategoria.kepek}`} alt={kategoria.megnevezes} />
                        </NavLink>
                    </div>
                    <div className='col-sm-2 align-self-center'>
                        <button className='btn btn-primary m-2' onClick={() => { navigate(`modositas/${kategoria.id}`) } } >Módosítás</button>
                        <button className='btn btn-danger m-2' onClick={() => { navigate(`torles/${kategoria.id}`) } } >Törlés</button>
                        
                    </div>
                </div>
                ))
                }

        </div>
    )
}

export default KategoriaListPage