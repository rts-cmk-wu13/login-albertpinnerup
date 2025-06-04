import { Form, useLocation, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import "../styles/_login.scss";
import { FaArrowRight } from "react-icons/fa6";

export default function Login() {
    const [error, setError] = useState();
    const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    console.log("location: ", location);
    const from = location.state?.from?.pathname || "/";
    console.log(from);

    async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(event.currentTarget.password.value);
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
        // validér her...

        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const userdata = await response.json();

        console.log(userdata);

        if (!response.ok) {
            setError(
                userdata.message ||
                    userdata.error ||
                    "Please provide login credentials"
            );
        } else {
            login(userdata.accessToken);
            navigate("/secrets");
        }
    }

    return (
        <Form onSubmit={handleLogin}>
            <div className="formgroup">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                />
            </div>
            <div className="formgroup">
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                />
            </div>
            {error && <div>{error}</div>}
            <button
                type="submit"
                className="button"
                style={{
                    backgroundColor: "#29B6F6",
                    color: "#fff",
                }}
            >
                <span>Log in</span><FaArrowRight style={{strokeWidth: "1rem"}}/>
            </button>
        </Form>
    );
}
