import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
        <nav className="navbar">
            <div className="nav-div">
                <NavLink
                    to="/"
                    /* add styling to Navlink */
                    className="nav-link"
                >
                Home
                </NavLink>
                <NavLink
                    to="/recipes"
                    className="nav-link"
                >
                Recipes
                </NavLink>
                <NavLink
                    to="/newrecipe"
                    className="nav-link"
                >
                New Recipes
                </NavLink>
                <NavLink
                    to="/contact"
                    className="nav-link"
                >
                Contact
                </NavLink>
               
        </div>
        </nav>
        
    )
}

export default NavBar