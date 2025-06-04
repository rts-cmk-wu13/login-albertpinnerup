import { NavLink } from "react-router"

export default function Navigation() {

    return (
        <nav className="navigation">
            <NavLink to='/'>
                Home
            </NavLink>
            <NavLink to='/list'>
                List
            </NavLink>
            <NavLink to='/contact'>
                contact
            </NavLink>
            <NavLink to='/login'>
                Login
            </NavLink>
            <NavLink to='/about'>
                About
            </NavLink>
        </nav>
    )

}