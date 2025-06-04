import { Link } from "react-router";
import "./_button.scss"
import type { ButtonProps } from "../../types/buttonType";

export default function SignupButton({className, style}: ButtonProps) {
    return (
            <Link to="/signup" className={className} style={style}>
                <span>Sign up</span>
            </Link>
    );
}
