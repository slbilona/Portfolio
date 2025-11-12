import TitreH2 from "../components/TitreH2"

function APropos() {
    return (
        <div id="APropos" className="flex flex-col justify-center text-center items-center md:pt-10 px-5 md:px-0 pb-5 md:pb-15">
            <div className="bg-trois/20 rounded-xl px-8 md:px-15 py-4 my-2 md:my-0 md:mx-2 shadow-lg text-center">
                <TitreH2 titre="À propos de moi" couleur="var(--color-trois)"/>
                <p className="max-w-170 ">
                    Depuis 2022, le code est ma passion. À l'<a href="https://42.fr/" target="_blank" className="border-trois border-b-1 hover:border-b-2 transition-all duration-150">École 42</a>, j’ai développé des compétences solides en travail d’équipe, en organisation et en apprentissage autonome. Je maîtrise des langages comme le C, C++, Python et JavaScript, des frameworks tels que Django et React, et des outils comme Node.js, Docker ou Git, ce qui me permet de créer des projets web complets et innovants.
                </p>
            </div>

        </div>
    )
}

export default APropos