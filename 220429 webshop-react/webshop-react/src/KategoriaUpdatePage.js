import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function KategoriaUpdatePage() {
    const navigate = useNavigate();
    const[kategoria, setKategoria] = useState([]);
    const params = useParams();
    const kategoriaId = params.kategoriaId;

    useEffect(() => {
      fetch(`https://localhost:7082/api/Kategoriak/${kategoriaId}`)
      .then(res => res.json())
      .then(kategoria => { setKategoria(kategoria); console.log(kategoria); })
      .catch(error => console.log(error));
    }, [kategoriaId]);
    
    return (
        <div className='text-center mt-2'>
            <h2>Kategória módosítása</h2>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    e.persist();
                    if (
                        e.target.elements.megnevezes.value !== "" &&
                        e.target.elements.leiras.value !== "" &&
                        e.target.elements.kep.value !== ""
                    ) {
                        fetch(`https://localhost:7082/api/Kategoriak/${kategoriaId}`, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                Id: kategoriaId,
                                megnevezes: e.target.elements.megnevezes.value,
                                leiras: e.target.elements.leiras.value,
                                kepek: e.target.elements.kep.value
                            })
                        })
                            .then(res => res)
                            .then(res => {
                                console.log(res);
                                if (res.ok) {
                                    alert("A kategória módosításra került.");
                                    navigate('/');
                                }
                            })
                            .catch(error => console.log(error));
                    }
                    else {
                        alert("A mezőket ki kell tölteni!");
                    }
                }}
            >

                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Megnevezés: </label>
                    <div className='col-sm-8'>
                        <input className='form-control' type="text" name='megnevezes' defaultValue={kategoria.megnevezes} />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Leírás: </label>
                    <div className='col-sm-8'>
                        <textarea className='form-control' type="" name='leiras' defaultValue={kategoria.leiras} rows="4" />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Kép link: </label>
                    <div className='col-sm-8'>
                        <input className='form-control' type="text" name='kep' defaultValue={kategoria.kepek}/>
                    </div>
                </div>
                <button className='btn btn-primary' type='submit' >Módosítás</button>
            </form>
        </div>
    )
}

export default KategoriaUpdatePage