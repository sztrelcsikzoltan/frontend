import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function TermekDelete() {
    const params = useParams();
    const id = params.termekId;
    const [termek, setTermek] = useState([]);
    const [termekAr, setTermekAr] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://localhost:44393/Termek?id=${id}`)
            .then(res => res.json())
            .then(termek => { setTermek(termek); setTermekAr(termek.ar + " Ft"); console.log(termek); })
            .catch(console.logS);
    }, [id]);

    return (
        <div className='text-center mt-2'>
            <div>
                <div>
                    <button className='btn btn-info mb-2' onClick={() => { navigate("/torles") }}>Vissza</button>
                </div>
                <button
                    className='btn btn-danger'
                    onClick={() => {
                        fetch(`https://localhost:44393/Termek?id=${id}`, {
                            method: "DELETE",
                            headers: { 'Content-Type': 'application/json' }
                        })
                            .then(() => {
                                alert("Termék törlésre került!");
                                navigate('/torles');
                            })
                    }}
                >
                    Törlés
                </button>
            </div>
            <h2>{termek.nev}</h2>
            <div>{termekAr}</div>
            <div className='small'>{termek.leiras}</div>
            <img className='img-fluid mt-2' src={termek.keplink} alt={termek.nev} />
        </div>
    )
}

export default TermekDelete