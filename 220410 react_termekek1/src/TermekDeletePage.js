import { useEffect, useState, } from 'react'
import { NavLink } from 'react-router-dom';

function TermekDeletePage() {
    const [termekek, setTermekek] = useState([]);

    useEffect(() => {
        fetch("https://localhost:44393/Termekek")
            .then(res => res.json())
            .then(termekek => { setTermekek(termekek); console.log(termekek); })
            .catch(console.log)
    }, []);

    return (
        <div className='text-center mt-2'>
            <h2>Válaszd ki a törölni kívánt terméket!</h2>
            {termekek.map(termek => (
                <NavLink key={termek.id} to={'/torles/' + termek.id}>
                    <div className='card col-sm-3 d-inline-block m-1'>
                        <h5>{termek.nev}</h5>
                        <div>{termek.ar}</div>
                        <div className='small'>{termek.leiras}</div>
                        <img className='img-fluid p-2' src={termek.keplink} alt={termek.nev} />
                    </div>
                </NavLink>
            ))
            }
        </div>
    )
}

export default TermekDeletePage