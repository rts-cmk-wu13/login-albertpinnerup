import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

export default function LoginButton() {
    return (
        <>
            <Link to="/login" className="login-button" >
                <span>login</span><span><FaArrowRight /></span>
            </Link>
        </>
    );
}
