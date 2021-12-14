import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> The Dojo Blog </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/newblogs">New  Blog</Link>
                <Link to="/experiments">Experiments</Link>
                
            </div>
        </nav>
    );
}
 
export default Navbar;