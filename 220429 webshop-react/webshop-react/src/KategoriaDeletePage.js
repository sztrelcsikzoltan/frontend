import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function KategoriaDeletePage() {
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
            <h2>Kategória törlése</h2>
            <div>
                <button className='btn btn-primary mb-2' type='submit' onClick={() => navigate("/")}>Vissza</button>
            </div>
            <button className='btn btn-danger mb-2' type='submit' onClick={() => {
                fetch(`https:localhost:7082/api/Kategoriak/${kategoriaId}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
                .then(res => res)
                .then(res => {
                    if (res.ok) {
                        alert("Kategória törlésre került!");
                        navigate("/");
                    }
                })
                .catch(error => console.log(error));
                
                navigate("/");}}>Törlés</button>
            <h5>{kategoria.megnevezes}</h5>
            <div>{kategoria.leiras}</div>
            <img className='img-fluid p-2' src={`/images/${kategoria.kepek}`} alt={kategoria.kepek} title={kategoria.kepek} />
        </div>
    )
}

export default KategoriaDeletePage