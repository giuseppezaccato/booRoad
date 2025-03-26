import { useTravelContext } from "../contexts/TravelContext";

export default function SearchBar() {
    const { searchTerm, handleSearch, handleSubmit, refSearch } = useTravelContext();
    return (
        <form className="container-fluid d-flex" onSubmit={handleSubmit} >
            <input
                ref={refSearch}
                type="text"
                placeholder="Cerca..."
                value={searchTerm}
                onChange={handleSearch}
                className="form-control me-2 text-black bg-white"
            />
            <button className="btn" type="submit">Cerca</button>
        </form >
    )
};