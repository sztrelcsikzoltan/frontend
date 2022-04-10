import { useNavigate } from 'react-router-dom';

function TermekCreatePage() {
    const navigate = useNavigate();

    return (
        <div className='text-center mt-2'>
            <h2>Új termék felvétele</h2>
            <form
                onSubmit={e => {
                    e.persist();
                    e.preventDefault();

                    if (e.target.elements.nev.value !== "" &&
                    e.target.elements.ar.value !== "" && 
                    e.target.elements.leiras.value !== "" && 
                    e.target.elements.keplink.value !== "") {
                        
                        fetch("https://localhost:44393/Termek", {
                            method: "POST",
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                nev: e.target.elements.nev.value,
                                ar: e.target.elements.ar.value,
                                leiras: e.target.elements.leiras.value,
                                keplink: e.target.elements.keplink.value
                            })
                        })
                            .then(() => {
                                alert("Termék felvétele megtörtént.");
                                navigate("/");
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
                        <input className='form-control' type="text" name='nev' />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Ár:</label>
                    <div className='col-sm-9'>
                        <input className='form-control' type="number" name='ar' />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Leírás:</label>
                    <div className='col-sm-9'>
                        <input className='form-control' type="text" name='leiras' />
                    </div>
                </div>
                <div className='row mb-3'>
                    <label className='col-sm-2 mt-2'>Kép link:</label>
                    <div className='col-sm-9'>
                        <input className='form-control' type="text" name='keplink' />
                    </div>
                </div>
                <div className='mt-2'>
                    <button className='btn btn-success mt-2' type='submit'>Felvétel</button>
                </div>
            </form>
        </div>
    )
}

export default TermekCreatePage