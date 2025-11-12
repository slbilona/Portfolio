function ListContactElement({element}) {
    return (
        <li className="px-2 md:px-4 py-1 text-2xl text-white hover:bg-quatre transition duration-150 bg-trois rounded-xl mx-2 mb-2 shadow-lg">
            <a href={element.lien} target="_blank" className="">{element.text}</a>
        </li>
    )
}

export default ListContactElement