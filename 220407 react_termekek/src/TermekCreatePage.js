import { useNavigate } from "react-router-dom";

function TermekCreatePage() {
  const navigate = useNavigate();
  
  return (
    <div className="text-center pt-2">
      <h2>Új termék</h2>
      <form
        onSubmit={(e) => {
          e.persist();
          e.preventDefault();

          if (e.target.elements.nev.value !== "" && e.target.elements.ar.value !== "" && e.target.elements.leiras.value !== "" && e.target.elements.keplink.value !== "") {
            fetch('https://localhost:44393/termek/', {

              method: "POST",
              headers: {
                //  'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                nev: e.target.elements.nev.value,
                ar: e.target.elements.ar.value,
                leiras: e.target.elements.leiras.value,
                keplink: e.target.elements.keplink.value
              }),
            })
              .then(() => {
                alert("termék felvétele megtörtént.");
                navigate('/');
              })
              .catch(console.log);
          }
          else {
            alert("A mezők nem lehetnek üresek!");
          }
        }}

      >
        <div className="form-group row pb-3">
          <label className="col-sm-3 mt-2">Név:</label>
          <div className="col-sm-8">
            <input type="text" name="nev" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 mt-2">Ár:</label>
          <div className="col-sm-8">
            <input type="number" name="ar" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 mt-2">Leírás:</label>
          <div className="col-sm-8">
            <input type="text" name="leiras" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 mt-2">Kép link:</label>
          <div className="col-sm-8">
            <input type="text" name="keplink" className="form-control" />
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          Termék felvétele
        </button>

      </form>


    </div>
  )
}

export default TermekCreatePage