import { Link } from "react-router-dom";
import { useTravelContext } from "../contexts/TravelContext";

import Card from "../components/Card";

export default function HomePage() {

    const { filteredViaggi } = useTravelContext()

    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">

                {filteredViaggi.map(t => (
                    <div key={t.id} className="col d-flex justify-content-center">
                        <Link to={`/travels/${t.id}`} >
                            <Card t={t} />
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    );
}