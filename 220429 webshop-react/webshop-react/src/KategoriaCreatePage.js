import React from 'react'
import { useNavigate } from 'react-router-dom';

function KategoriaCreatePage() {
    const navigate = useNavigate();

    return (
        <div className='text-center mt-2'>
            <h2>Új kategória hozzáadása</h2>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    e.persist();
                    if (
                        e.target.elements.megnevezes.value !== "" &&
                        e.target.elements.leiras.value !== "" &&
                        e.target.elements.kep.value !== ""
                    ) {
                        fetch(`https://localhost:7082/api/UjKategoriak`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                Id: 0,
                                megnevezes: e.target.elements.megnevezes.value,
                                leiras: e.target.elements.leiras.value,
                                kepek: e.target.elements.kep.value
                            })
                        })
                            .then(res => res)
                            .then(res => {
                                console.log(res);
                                if (res.ok) {
                                    alert("Új kategória mentésre került.");
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
                        <input className='form-control' type="text" name='megnevezes' />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Leírás: </label>
                    <div className='col-sm-8'>
                        <input className='form-control' type="text" name='leiras' />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Kép link: </label>
                    <div className='col-sm-8'>
                        <input className='form-control' type="text" name='kep'/>
                    </div>
                </div>
                <button className='btn btn-primary' type='submit' >Hozzáadás</button>
            </form>
        </div>
    )
}

export default KategoriaCreatePage