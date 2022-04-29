import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function KategoriaPage() {
    const navigate = useNavigate();
    const [kategoria, setKategoria] = useState([]);
    const params = useParams();
    const kategoriaId = params.kategoriaId;

    useEffect(() => {
        fetch(`https://localhost:7082/api/Kategoriak/${kategoriaId}`)
            .then(res => res.json())
            .then(kategoria => { setKategoria(kategoria); console.log(kategoria) })
            .catch(error => console.log(error));
    }, [kategoriaId]);


    return (
        <div className='text-center mt-2'>
            <h2>Kategória</h2>
            <div>
                <button className='btn btn-primary mb-2' type='submit' onClick={() => navigate("/")}>Vissza</button>
            </div>
            <h5>{kategoria.megnevezes}</h5>
            <div>{kategoria.leiras}</div>
            <img className='img-fluid p-2' src={`/images/${kategoria.kepek}`} alt={kategoria.kepek} title={kategoria.kepek} />
        </div>
    )
}

export default KategoriaPage