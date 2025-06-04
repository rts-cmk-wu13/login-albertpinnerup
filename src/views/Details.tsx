import { useLoaderData, useParams } from "react-router"
import { useQuery } from "@tanstack/react-query";
import { ListItemSchema } from "../schemas/schemas";
import type { ListItem } from "../schemas/schemas";

export default function Details() {

    
    const initialData = useLoaderData() as ListItem;

    const { id } = useParams<{ id: string }>();

    const { data, isPending } = useQuery({
        queryKey: ["list", id],
        queryFn: async () => initialData,
        initialData: initialData,
    });

    if (isPending || !data) {
        return (
            <p>Loading...</p>
        );
    }

    // Validate the data using Zod
    const result = ListItemSchema.safeParse(data);

    if (!result.success) {
        console.error("Invalid data format:", result.error);
        return <p>Invalid data format</p>;
    }

    const parsedData = result.data;

    return (
        <div>
            <h1>{parsedData.name}</h1>
        </div>
    )

}