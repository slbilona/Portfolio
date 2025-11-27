import TitreH2 from "../components/TitreH2"
import ProjetsCard from "../components/ProjetsCards"

function Projets() {
    const projets = [
        {id:1, titre:"Portfolio", description:"Mon portfolio présente mes réalisations en développement web, mes projets personnels et met en avant mes compétences.", github:"https://github.com/slbilona/Portfolio", skills:["React", "JavaScript", "Node.js", "Tailwind CSS"]},
        {id:2, titre:"Ft_transcendance", description:"Un jeu Pong multijoueur en ligne avec gestion de profils, ajout/suppression d’amis, historique des parties et chat en direct.", github:"https://github.com/slbilona/ft_transcendance", skills:["HTML", "CSS", "Django", "JavaScript", "Bootstrap"]},
        {id:3, titre:"Python for Data Science", description:"Une série d’exercices pour apprendre l’analyse de données en Python, incluant entre autres le traitement de datasets, le calcul de statistiques ou encore la manipulation de tableaux et d’images.", github:"https://github.com/slbilona/Python-for-Data-Science", skills:["Python"]},
    ]

    return (
        <div id="Projets" className="p-15 flex flex-col justify-center items-center">
            <TitreH2 titre="Mes projets" couleur="var(--color-quatre)"/>
            <div className="flex flex-col md:flex-row">
                {projets.map((projet) => (
                    <ProjetsCard projet={projet} key={projet.id}/>
                ))}
            </div>
        </div>
    )
}

export default Projets