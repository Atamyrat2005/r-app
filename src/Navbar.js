const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Atamyrat</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: 'blueviolet',
                    borderRadius: '8px',
                }}>New blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;