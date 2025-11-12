import photo1 from '../img/thumbnail_IMG_8407.jpg'
import BoutonAccueil from '../components/BoutonAccueil'

function Accueil() {
    return (
        <div id="Accueil" className="h-screen flex flex-col justify-center text-center items-center p-5 md:p-0">
            <img src={photo1} className="w-70 h-70 object-cover md:w-80 md:h-80 md:object-cover mb-3 border-6 border-trois shadow-lg" style={{borderRadius : "21% 79% 70% 30% / 30% 31% 69% 70% "}}></img>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-2">
                <h1 className="font-bold text-4xl md:text-5xl">Bonjour, je suis</h1>
                <h1 className="font-bold text-4xl md:text-5xl text-quatre">Ilona Selbonne</h1>
            </div>
            <p className="text-xl md:text-1xl max-w-170 my-3">
                Actuellement étudiante à l'<a href="https://42.fr/" target="_blank" className="border-un border-b-2 hover:border-b-4 transition-all duration-150">École 42</a>. Je suis à la recherche d'un stage en data/ia ou en développement full stack
            </p>
            <div className="flex flex-row justify-between sm:hidden">
                <BoutonAccueil contenu="Voir mes projets" to="#Projets"/>
                <BoutonAccueil contenu="Me contacter" to="#Contact"/>
            </div>
        </div>
    )
}

export default Accueil