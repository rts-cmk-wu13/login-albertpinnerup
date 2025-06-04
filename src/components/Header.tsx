import { useLocation } from "react-router";
import Navigation from "./Navigation";
import LogoutButton from "./LogoutButton";
import bird from "../assets/emojione_bird.svg";

export default function Header() {

    const location = useLocation();

    return  (
        <header>
            <img src={bird} alt="" />
        </header>
    )

}