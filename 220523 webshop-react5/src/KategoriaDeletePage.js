import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function KategoriaDeletePage() {
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
            <h2>Kategória törlése</h2>
            <div>
                <button className='btn btn-primary' onClick={() => { navigate("/") }}>Vissza</button>
            </div>
            <button className='btn btn-danger m-2' onClick={() => {
                fetch(`https://localhost:7082/api/kategoriak/${kategoriaId}`, {
                    method: "DELETE",
                    headers: { "Content-type": "application/json" },
                })
                    .then(res => res)
                    .then(res => {
                        if (res.ok) {
                            alert("Kategória törlésre került.");
                            navigate("/");
                        }
                    })
                    .catch(error => console.error(error));
            }}>Törlés</button>
            <h5>{kategoria.megnevezes}</h5>
            <div>{kategoria.leiras}</div>
            <img className='img-fluid p-2' src={`../images/${kategoria.kepek}`} alt={kategoria.megnevezes} />
        </div>
    )
}

export default KategoriaDeletePage