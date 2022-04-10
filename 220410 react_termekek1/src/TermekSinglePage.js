import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function TermekSinglePage() {
    const params = useParams();
    const id = params.termekId;
    const [termek, setTermek] = useState([]);
    const [termekAr, setTermekAr] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://localhost:44393/Termek?id=${id}`)
            .then(res => res.json())
            .then(termek => { setTermek(termek); setTermekAr(termek.ar + " Ft"); console.log(termek); })
            .catch(console.log);
    }, [id]);


    return (
        <div className='text-center mt-2'>
            <div>
                <button className='btn btn-info mt-2' onClick={() => { navigate('/') }} >Vissza</button>
            </div>
            <h2>{termek.nev}</h2>
            <div>{termekAr}</div>
            <div className='small'>{termek.leiras}</div>
            <img className='img-fluid mt-2' src={termek.keplink} alt={termek.nev} />
        </div>
    )
}

export default TermekSinglePage