
function PulsanteChiamata({ numero }) {
    const gestisciClick = () => {
        window.location.href = `tel:${numero}`;
    };

    return (
        <button className="btn " onClick={gestisciClick}> <i className="bi bi-telephone"> </i> </button>
    );
}

export default PulsanteChiamata;