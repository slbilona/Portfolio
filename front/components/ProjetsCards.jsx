function ProjetsCard({projet}) {
    return (
        <div className="bg-un/20 rounded-xl p-2 my-2 md:my-0 md:mx-2 flex flex-col justify-between items-center shadow-lg hover:shadow-lg/20 transition duration-150 text-center md:w-1/3 md:max-w-100">
            <h3 className="font-medium text-lg">{projet.titre}</h3>
            <p className="my-2 md:max-w-70">{projet.description}</p>
            <div className="flex flex-row flex-wrap justify-center items-center mb-2">
                {projet.skills.map((skill) => (
                    <p className="px-2 border-trois rounded-full border-1 m-1">{skill}</p>
                ))}
            </div>
            <a href={projet.github} target="_blank" className="bg-quatre/90 p-2 rounded-full text-white w-full  hover:bg-quatre transition duration-150">GitHub</a>
        </div>
    )
}

export default ProjetsCard