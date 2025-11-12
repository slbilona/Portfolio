import NavLink from "./NavLink"

function NavBar() {
    const nav = [
        {id:1, text:"A Propos", to:"#APropos"},
        {id:2, text:"Projets", to:"#Projets"},
        {id:3, text:"Contact", to:"#Contact"}
    ]
    return (
        <nav className="bg-deux sticky z-10 -mb-15 h-15 top-0 flex flex-row justify-around p-4 shadow-lg">
            <div className="font-bold text-2xl text-quatre">
                <a href="#Accueil">
                    Mon Portfolio
                </a>
            </div>
            <ul className="hidden sm:flex flex-row text-lg">
                {nav.map((nav) => (
                    <NavLink text={nav.text} to={nav.to} key={nav.id}/>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar