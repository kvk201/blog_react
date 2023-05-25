import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return(
        <nav className="navbar">
            <h1>Vivek's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{}}>Create Blog</Link></div>
        </nav>
    );
}
export default NavBar;