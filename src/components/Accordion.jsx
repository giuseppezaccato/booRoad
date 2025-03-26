import { useLocation } from "react-router-dom";
import PulsanteChiamata from "./CallButton";

export default function Accordion({ v, i }) {

    const location = useLocation();
    const showDest = location.pathname.startsWith('/contacts')

    return (
        <div className=" accordion col-8 col-md-6 mx-auto " id="accordionExample">
            <div className="accordion-item p-2">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed accordion-button-no-blue text-center"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${v.codice_fiscale}`}
                        aria-expanded="false"
                        aria-controls={v.codice_fiscale}
                    >
                        {v.nome} {v.cognome}
                    </button>
                </h2>
                <div
                    id={v.codice_fiscale}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">

                        <p> telefono: <strong>{v.cellulare}  </strong> <PulsanteChiamata numero={v.cellulare} /></p>
                        <p>email: {v.email}</p>
                        <p>CF: {v.codice_fiscale}</p>

                        {
                            showDest && <p>destinazione: {v.destinazione}</p>
                        }

                    </div>
                </div>
            </div>
        </div >
    );
}