import { useAuth } from "../contexts/AuthContext"
import { useNavigate, Link } from "react-router"

export default function LogoutButton() {
    const { token, logout } = useAuth();
    const navigate = useNavigate()

    function handleLogout () {

        logout()
        setTimeout(() => navigate("/"), 0) // navigate after logout to avoid state issues
        
    }

    return token ? (
        <button onClick={handleLogout}>Log out</button>
    ) : <Link to="/login">Login</Link>
}