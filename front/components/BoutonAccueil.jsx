function BoutonAccueil({contenu, to}) {
    return (
        <a className="bg-trois/60 p-3 rounded-full text-white hover:bg-trois/70 transition duration-150 mx-1 shadow-lg" href={to}>{contenu}</a>
    )
}

export default BoutonAccueil