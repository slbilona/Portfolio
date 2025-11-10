import TitreH2 from "../components/TitreH2"
import ProjetsCard from "../components/ProjetsCards"

function Projets() {
    const projets = [
        {id:1, titre:"Projet 1", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.", github:"https://github.com/slbilona/ft_transcendance_3.0", skills:["React", "JavaScript", "Tailwind CSS"]},
        {id:2, titre:"Projet 2", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.", github:"https://github.com/slbilona/ft_transcendance_3.0", skills:["HTML", "CSS", "Django", "JavaScript", "Bootstrap"]},
        {id:3, titre:"Projet 3", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.", github:"https://github.com/slbilona/ft_transcendance_3.0", skills:["C++"]},
    ]

    return (
        <div id="Projets" className="py-15 px-15 flex flex-col justify-center items-center">
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