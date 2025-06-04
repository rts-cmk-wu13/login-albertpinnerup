import { Link, useLoaderData } from "react-router";
import type { ListItem } from "../schemas/schemas";


export default function List() {

    const data = useLoaderData() as ListItem[];

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
