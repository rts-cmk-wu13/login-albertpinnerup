import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router"
import LoginButton from "./LoginButton";
import "./_button.scss"
import type { ButtonProps } from "../../types/buttonType";

export default function LogoutButton({className, style}: ButtonProps) {
    const { token, logout } = useAuth();
    const navigate = useNavigate()

    function handleLogout () {

        logout()
        setTimeout(() => navigate("/"), 0) // navigate after logout to avoid state issues
        
    }

    return token ? (
        <button onClick={handleLogout} className={className} style={style}>Log out</button>
    ) : <LoginButton />
}