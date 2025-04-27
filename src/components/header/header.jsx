const Header = () => {
    return (
        <header>
            <h1 className="text-fuchsia-600 text-5xl text-center mb-5">Tailwind Practice</h1>
            <nav className="text-center mb-2">
                <ul>
                    <li><a href="#" className="font-bold hover:text-blue-400 active:text-red-400">Home</a></li>
                    <li><a href="#" className="font-bold hover:text-blue-400 active:text-red-400">About</a></li>
                    <li><a href="#" className="font-bold hover:text-blue-400 active:text-red-400">Services</a></li>
                    <li><a href="#" className="font-bold hover:text-blue-400 active:text-red-400">Contact</a></li>
                </ul>
            </nav>
            <hr className="border-0 border-b-4 border-b-blue-400 mb-5"/>
        </header>
    )
}

export default Header