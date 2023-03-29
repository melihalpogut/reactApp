function ModKutusu(ozellikler) {
    return (
        <div>
            <img src={ozellikler.url} alt={ozellikler.alt} />
            <h2>{ozellikler.modAdi}</h2>
        </div>
    )
}

export default ModKutusu