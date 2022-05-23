import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function KategoriaCreatePage() {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div className='text-center p-2'>
            <h2>Új kategória</h2>

            <form
                onSubmit={e => {
                    e.preventDefault();

                    if (e.target.elements.megnevezes.value !== "" &&
                        e.target.elements.leiras.value !== "" &&
                        e.target.elements.kepek.value !== "") {

                        fetch(`https://localhost:7082/api/ujkategoriak`, {
                            method: "POST",
                            headers: { "Content-type": "application/json" },
                            body: JSON.stringify({
                                megnevezes: e.target.elements.megnevezes.value,
                                leiras: e.target.elements.leiras.value,
                                kepek: e.target.elements.kepek.value
                            })
                        })
                            .then(res => res)
                            .then(res => {
                                if (res.ok) {
                                    alert("Kategória hozzáadásra került.");
                                    navigate("/");
                                }
                            })
                            .catch(error => console.error(error));
                    }
                    else{
                        alert("A mezőket ki kell tölteni!");
                    }
                }}
            >
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Megnevezés:</label>
                    <div className='col-sm-9'>
                        <input className='form-control' type="text" name='megnevezes' />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Leírás:</label>
                    <div className='col-sm-9'>
                        <textarea className='form-control' rows="4" name='leiras' />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Kép neve:</label>
                    <div className='col-sm-9'>
                        <input className='form-control' type="text" name='kepek' />
                    </div>
                </div>
                <button className='btn btn-primary' type='submit' >Hozzáad</button>
            </form>
        </div>
    )
}

export default KategoriaCreatePage