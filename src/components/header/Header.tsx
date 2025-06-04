import bird from "/src/assets/emojione_bird.svg";
import "./_header.scss";
import LogoutButton from "../login_logout/LogoutButton";
import { useLocation } from "react-router";

export default function Header() {

    const location = useLocation();
    return (
        <header>
            {location.pathname !== "/secrets" ? (
                <img src={bird} alt="" />
            ) : (
                <div>
                    <LogoutButton
                        className={"button"}
                        style={{
                            backgroundColor: "#29B6F6",
                            color: "#fff",
                            width: "30%"
                        }}
                    />
                    <h1>Secrets</h1>
                </div>
            )}
        </header>
    );
}
