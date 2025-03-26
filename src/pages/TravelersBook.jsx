// import { useState } from 'react'; => to Context
import Accordion from '../components/Accordion';
import { useTravelContext } from '../contexts/TravelContext';

export default function TravelersBook() {
    const { filteredViaggiatori } = useTravelContext()


    // const tuttiViaggiatori = travelData.flatMap(viaggio => viaggio.viaggiatori);
    // const [searchTerm, setSearchTerm] = useState('');

    // const filteredViaggiatori = tuttiViaggiatori.filter(viaggiatore =>
    //     viaggiatore.nome.toLowerCase().includes(searchTerm.toLowerCase())
    // ); =>to Context

    return (
        <div>
            {/* <input
                type="text"
                placeholder="Cerca per nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            /> */}

            <h1 className='text-center mb-4'>Rubrica contatti:</h1>

            {filteredViaggiatori.map((v, i) => {
                return (
                    <Accordion key={i} v={v} />
                )
            })
            }
        </div>
    );
}