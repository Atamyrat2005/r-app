import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Atamyrat</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: 'blueviolet',
                    borderRadius: '8px',
                }}>New blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;