import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function TermekSinglePage() {
  const params = useParams();
  const id = params.termekId;
  const [termek, setTermek] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:44393/termek/GetTermek?id=${id}`)
      .then((res) => res.json())
      .then((termek) => setTermek(termek))
      .catch(console.log)
  });

  return (
    <div className='text-center pt-2'>
      <h5>{termek.nev}</h5>
      <div>{termek.ar} Ft</div>
      <div className='small'>{termek.leiras}</div>
      <img
        className='img-fluid p-2'
        src={termek.keplink ? termek.keplink : "https://via.placeholder.com/400x400"}
        alt={termek.nev}
      />

    </div>
  )
}

export default TermekSinglePage