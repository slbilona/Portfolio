function NavLink({text, to}) {
    return (
        <li className="mx-2 text-black text-xl hover:text-trois/80 transition duration-150"><a href={to}>{text}</a></li>
    )
}

export default NavLink