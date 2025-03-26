import { useContext, createContext, useState, useRef } from "react";
import travelData from '../data/arrayTravels'

const TravelContext = createContext()

function TravelProvider({ children }) {
    const tuttiViaggiatori = travelData.flatMap(viaggio => viaggio.viaggiatori);

    const [searchTerm, setSearchTerm] = useState('');

    //task funzione filtro in HomePage
    const filteredViaggi = (searchTerm == '') ? travelData : travelData.filter(viaggio => viaggio.destinazione.toLocaleLowerCase().includes(searchTerm.toLowerCase()))

    //task funzione filtro in TravelersBook
    const filteredViaggiatori = tuttiViaggiatori.filter(viaggiatore =>
        (viaggiatore.nome.toLowerCase() + viaggiatore.cognome.toLowerCase()).includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value);
        refSearch.current.focus();
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const refSearch = useRef(null)

    const data = {
        handleSearch,
        searchTerm,
        filteredViaggiatori,
        handleSubmit,
        refSearch,
        filteredViaggi
    }


    return (
        <TravelContext.Provider value={data}>
            {children}
        </TravelContext.Provider>
    )
}

const useTravelContext = () => useContext(TravelContext)

export { TravelProvider, useTravelContext }