import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function TermekUpdate() {
    const navigate = useNavigate();
    const [termek, setTermek] = useState([]);
    const params = useParams();
    const id = params.termekId;

    useEffect(() => {
        fetch(`https://localhost:44393/Termek?Id=${id}`)
            .then(res => res.json())
            .then(termek => { setTermek(termek); console.log(termek); })
            .catch(console.log);
    }, [id]);

    return (
        <div className='text-center mt-2'>
            <h2>Termék módosítása</h2>
            <form
                onSubmit={e => {
                    e.persist();
                    e.preventDefault();

                    if (e.target.elements.nev.value !== "" && 
                    e.target.elements.ar.value !== "" && 
                    e.target.elements.leiras.value !== "" && 
                    e.target.elements.keplink.value !== "") {
                    
                        fetch("https://localhost:44393/Termek", {
                            method: "PUT",
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                id: termek.id,
                                nev: e.target.elements.nev.value,
                                ar: e.target.elements.ar.value,
                                leiras: e.target.elements.leiras.value,
                                keplink: e.target.elements.keplink.value
                            })
                        })
                            .then(() => {
                                alert("Termék módosítása megtörtént.");
                                navigate("/modositas");
                            })
                            .catch(console.log);
                    }
                    else {
                        alert("A mezők nem lehetnek üresek!");
                    }
                }}
            >
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Név:</label>
                    <div className='col-sm-9'>
                        <input className='form-control' type="text" name='nev' defaultValue={termek.nev} />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Ár:</label>
                    <div className='col-sm-9'>
                        <input className='form-control' type="number" name='ar' defaultValue={termek.ar} />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Leírás:</label>
                    <div className='col-sm-9'>
                        <input className='form-control' type="text" name='leiras' defaultValue={termek.leiras} />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Kép link:</label>
                    <div className='col-sm-9'>
                        <input className='form-control' type="text" name='keplink' defaultValue={termek.keplink} />
                    </div>
                </div>
                <div className='mt-2'>
                    <button className='btn btn-success mt-2' type='submit'>Módosítás</button>
                </div>
            </form>
        </div>
    )
}

export default TermekUpdate