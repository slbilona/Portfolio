import TitreH2 from "../components/TitreH2"
import ProjetsCard from "../components/ProjetsCards"

function Projets() {
    const projets = [
        {id:1, titre:"Portfolio", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.", github:"https://github.com/slbilona/Portfolio", skills:["React", "JavaScript", "Tailwind CSS"]},
        {id:2, titre:"Ft_transcendance", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.", github:"https://github.com/slbilona/ft_transcendance_3.0", skills:["HTML", "CSS", "Django", "JavaScript", "Bootstrap"]},
        {id:3, titre:"Ft_irc", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.", github:"https://github.com/slbilona/ft_transcendance_3.0", skills:["C++"]},
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