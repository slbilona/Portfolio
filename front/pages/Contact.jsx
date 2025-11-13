import TitreH2 from "../components/TitreH2"
import ListContactElement from "../components/listContactElement"
import CV from "../fichier/CV Portfolio.pdf"
import FormulaireContact from "../components/FormulaireContact"
import ContactForm from "../components/ContactForm"

function Contact() {
    const ListContact = [
        {id:1, text:"GitHub", lien:"https://github.com/slbilona"},
        {id:2, text:"LinkedIn", lien:"https://www.linkedin.com/in/ilona-selbonne/"},
        {id:3, text:"CV", lien:CV},
    ]
    return (
        <div id="Contact" className="flex flex-col justify-center items-center md:mt-15 mb-10">
            <TitreH2 titre="Contact"  couleur="var(--color-trois)" />
            <div className="flex flex-col justify-center w-full max-w-lg space-y-4 px-2 md:px-0">
                {/* <FormulaireContact /> */}
                <ContactForm />
                <ul className="flex flex-row flex-wrap justify-between">
                    {ListContact.map((element) => (
                        <ListContactElement element={element} key={element.id}/>
                    ))}
                </ul>                
            </div>

        </div>
    )
}

export default Contact