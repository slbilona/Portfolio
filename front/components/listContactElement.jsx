function ListContactElement({element}) {
    return (
        <a href={element.lien} target="_blank" className="px-2 md:px-4 py-1 text-xl md:text-2xl text-white hover:bg-quatre transition duration-150 bg-trois rounded-xl shadow-lg">
            <li>{element.text}</li>
        </a>

    )
}

export default ListContactElement