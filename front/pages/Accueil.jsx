function Accueil() {
    return (
        <div id="Accueil" className="h-screen flex flex-col justify-center text-center items-center p-5 md:p-0">
            <img src="..\img\thumbnail_IMG_8407.jpg" className="w-70 h-70 object-cover md:w-80 md:h-80 md:object-cover mb-3 border-6 border-trois shadow-lg" style={{borderRadius : "21% 79% 70% 30% / 30% 31% 69% 70% "}}></img>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-2">
                <h1 className="font-bold text-4xl md:text-5xl">Bonjour, je suis</h1>
                <h1 className="font-bold text-4xl md:text-5xl text-quatre">Ilona Selbonne</h1>
            </div>
            <p className="text-xl md:text-1xl max-w-170 my-3">
                Actuellement étudiante à l'école 42. Je suis à la recherche d'un stage en data/ia ou en développement full stack
            </p>
            <a className="bg-trois/50 p-3 rounded-full text-white hover:bg-trois/60 transition duration-150" href="#Projets">Voir mes projets</a>
        </div>
    )
}

export default Accueil