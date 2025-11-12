import TitreH2 from "../components/TitreH2"
import ListContactElement from "../components/listContactElement"

function Contact() {
    const ListContact = [
        {id:1, text:"Email", lien:""},
        {id:2, text:"GitHub", lien:"https://github.com/slbilona"},
        {id:3, text:"LinkedIn", lien:"https://www.linkedin.com/in/ilona-selbonne/"},
        {id:4, text:"CV", lien:""},
    ]
    return (
        <div id="Contact" className="flex flex-col justify-center items-center md:mt-15 mb-10">
            <TitreH2 titre="Contact"  couleur="var(--color-trois)" />
            <ul className="flex flex-row flex-wrap">
                {ListContact.map((element) => (
                    <ListContactElement element={element} key={element.id}/>
                ))}
            </ul>
        </div>
    )
}

export default Contact