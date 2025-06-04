import { useLocation } from "react-router";
import Navigation from "./Navigation";
import LogoutButton from "./LogoutButton";

export default function Header() {

    const location = useLocation();

    return  (
        <header>
            <h1>My App</h1>
            {location.pathname !== '/login' && (
                <>
                <Navigation />
                <LogoutButton />
                </>
            )}
            
        </header>
    )

}