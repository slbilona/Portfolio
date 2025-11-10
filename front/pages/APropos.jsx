import TitreH2 from "../components/TitreH2"

function APropos() {
    return (
        <div id="APropos" className="flex flex-col justify-center text-center items-center pt-10 md:pt-5 px-5 md:px-0 pb-5 md:pb-15">
            <TitreH2 titre="À propos de moi" couleur="var(--color-trois)"/>
            <p className="max-w-170">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet, urna eu pharetra convallis, sapien nisl pulvinar urna, at tempor elit nunc non erat. Suspendisse potenti. Cras id orci magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.
            </p>
        </div>
    )
}

export default APropos