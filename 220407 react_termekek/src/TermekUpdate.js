import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TermekUpdate( value = "", onChange) {
  const params = useParams();
  const id = params.termekId;
  const [termek, setTermek] = useState([]);
  const navigate = useNavigate();
  
    useEffect(() =>{
        fetch(`https://localhost:44393/termek/GetTermek?id=${id}`)
        .then((res) => res.json())
        .then((termek) => setTermek(termek))
        .catch(console.log)
    }, [id, termek]);

    return (
    <div className="text-center pt-2">
        <h2>Termék módosítása</h2>
        <form
         onSubmit={(e) =>{
           e.persist();
           e.preventDefault();
           fetch('https://localhost:44393/Termek/', {
             method: "PUT",
             headers: {
              //  'Accept': 'application/json',
               'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               id: termek.id,
               nev: e.target.elements.nev.value,
               ar: e.target.elements.ar.value,
               leiras: e.target.elements.leiras.value,
               keplink: e.target.elements.keplink.value
             }),
           })
           .then(() =>{
             alert("Módosítást megtörtént.");
             navigate('/');
           })
           .catch(console.log);
           
         }}
         
        >
          <div className="form-group row pb-3">
            <label className="col-sm-3 mt-2">Név:</label>
            <div className="col-sm-8">
              <input type="text" name="nev" className="form-control" defaultValue={termek.nev} />
            </div>
          </div>
          <div className="form-group row pb-3">
            <label className="col-sm-3 mt-2">Ár:</label>
            <div className="col-sm-8">
              <input type="number" name="ar" className="form-control" defaultValue={termek.ar} />
            </div>
          </div>
          <div className="form-group row pb-3">
            <label className="col-sm-3 mt-2">Leírás:</label>
            <div className="col-sm-8">
              <input type="text" name="leiras" className="form-control" defaultValue={termek.leiras} />
            </div>
          </div>
          <div className="form-group row pb-3">
            <label className="col-sm-3 mt-2">Kép link:</label>
            <div className="col-sm-8">
              <input type="text" name="keplink" className="form-control" defaultValue={termek.keplink} />
            </div>
          </div>

          <button type="submit" className="btn btn-success">
            Módosítás
          </button>

        </form>

        
    </div>
  )
}

export default TermekUpdate