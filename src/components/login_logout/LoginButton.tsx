import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
import "./_button.scss"
import { IconContext } from "react-icons";
import type { ButtonProps } from "../../types/buttonType";

export default function LoginButton({className, style}: ButtonProps) {
    return (
        <IconContext.Provider value={{}}>
            <Link to="/login" className={className} style={style}>
                <span>Login</span><FaArrowRight style={{strokeWidth: "1rem"}}/>
            </Link>
        </IconContext.Provider>
    );
}
