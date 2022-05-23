import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function KategoriaSinglePage() {
    const [kategoria, setKategoria] = useState([]);
    const params = useParams();
    const kategoriaId = params.kategoriaId;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://localhost:7082/api/kategoriak/${kategoriaId}`)
            .then(res => res.json())
            .then(kategoria => { setKategoria(kategoria); console.log(kategoria); })
            .catch(error => console.error(error));
    }, [kategoriaId]);

    return (
        <div className='text-center m-2'>
            <h2>Kategória</h2>
            <div>
                <button className='btn btn-primary' onClick={() => { navigate("/") }}>Vissza</button>
            </div>
            <h5>{kategoria.megnevezes}</h5>
            <div>{kategoria.leiras}</div>
            <img className='img-fluid p-2' src={`../images/${kategoria.kepek}`} alt={kategoria.megnevezes} />
        </div>
    )
}

export default KategoriaSinglePage