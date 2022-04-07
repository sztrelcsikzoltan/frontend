import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


function TermekDelete() {
  const params = useParams();
  const id = params.termekId;
  const [termek, setTermek] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://localhost:44393/termek/GetTermek?id=${id}`)
      .then((res) => res.json())
      .then((termek) => { setTermek(termek); return termek; })
      .then((termek) => console.log(termek))
      .catch(console.log)
  }, [id]);

  function deleteTermek() {
    fetch(`https://localhost:44393/Termek?id=${id}`, {
      method: "DELETE",
      headers: {
        // 'Accept': 'application/json',
        'Content-Type': 'appliacation/json'
      }
    })
      .then(() => {
        alert('A termék törlésre került.');
        navigate('/');
      })
      .catch(console.log);
  }

  return (
    <div className="text-center pt-2">
      <h5>{termek.nev}</h5>
      <div>{termek.ar} Ft</div>
      <div className='small'>{termek.leiras}</div>
      <div>
        <button onClick={deleteTermek} className="btn btn-danger m-2">Termék törlése</button>
      </div>
      <img
        className='img-fluid p-2'
        src={termek.keplink ? termek.keplink : "https://via.placeholder.com/400x400"}
        alt={termek.nev}
      />
    </div>
  )
}

export default TermekDelete