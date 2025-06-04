import { useLoaderData } from "react-router";
import type { SecretsItem } from "../schemas/schemas";
import LogoutButton from "../components/login_logout/LogoutButton";

export default function Secrets() {
    const data = useLoaderData() as SecretsItem[];

    return (
        <>
        
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <p>{item.quote}</p>
                        <p>
                            <em>{item.author}</em>
                        </p>
                        <p>
                            <em>{item.origin}</em>
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
}
