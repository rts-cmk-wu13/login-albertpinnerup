import LoginButton from "../components/login_logout/LoginButton";
import SignupButton from "../components/login_logout/SignupButton";

export default function Home() {

    return (
        <>
            <h1 className="company_name">early bird.</h1>
            <p>Your local discount mate</p>
            <SignupButton className="button" style={{
                backgroundColor: "#29B6F6",
                color: "#fff",
            }}/>
            <LoginButton className="button" style={{
                backgroundColor: "#fff",
                color: "#29B6F6"
                }}/>
        </>
    )

}