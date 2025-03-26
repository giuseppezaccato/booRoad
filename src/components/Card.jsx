export default function Card({ t }) {
    return (
        <div className="card text-bg-dark mb-3 h-full flex flex-col" style={{ width: "18rem" }}>
            <img
                src={t.url}
                className="img-fluid rounded-top object-cover"
                alt={t.destinazione}
                style={{ height: "180px", width: "100%" }}
            />
            <div className="card-body flex-grow">
                <h5 className="card-title text-center">{t.destinazione}</h5>
                <ul className="list-unstyled">
                    <li><h6 className="card-text">Inizio: {t.data_inizio}</h6></li>
                    <li><h6 className="card-text">Fine: {t.data_fine}</h6></li>
                    <li><p className="card-text">{t.viaggiatori.length} viaggiatori</p></li>
                </ul>
                <button className="btn btn-primary w-20 float-end" >Lista partecipanti</button>
            </div>
        </div >
    );
}