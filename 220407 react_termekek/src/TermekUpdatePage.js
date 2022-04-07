import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

function TermekUpdatePage() {
  const[termekek, setTermekek] = useState([]);

  useEffect(() =>{
    fetch("https://localhost:44393/termek")
    .then((res) => res.json())
    .then((termekek) => {setTermekek(termekek); return termekek;})
    .then((termekek) => console.log(termekek))
    .catch(console.log)

  }, []);
  
  return (
    <div className='text-center'>
      <h2 style={{color: "Salmon"}}>Válaszd ki a módosítani kívánt terméket:</h2>
      {termekek.map((termek) => (
        <NavLink key={termek.id} to={"/modositas/" + termek.id}>
          <div className='card col-sm-3 d-inline-block m-1'>
            <h5>{termek.nev}</h5>
            <div>{termek.ar} Ft</div>
            <div className='small'>{termek.leiras}</div>
            <img
            className='img-fluid p-2'  
            src={termek.keplink ? termek.keplink : "https://via.placeholder.com/400x400"}
              alt={termek.nev}
              />
          </div>
        </NavLink>
      ))}

    
    </div>
  )
}

export default TermekUpdatePage