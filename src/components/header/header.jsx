const Header = () => {
    return (
        <header>
            <h1 className="text-fuchsia-600 text-5xl text-center mb-5">My website</h1>
            <nav className="text-center mb-2">
                <ul>
                    <li><a href="#" >Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    )
}

export default Header