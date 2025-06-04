import { Link, useLoaderData } from "react-router";
import type { ListItem } from "../schemas/schemas";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export default function List() {

    const data = useLoaderData() as ListItem[];
    const {token, setToken} = useContext(AuthContext);

    console.log("Auth Context:", token);

    return (
        <ul>

            {data.map((item) => (
                <li key={item.id}>
                    <Link to={`/list/${item.id}`} key={item.id}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
