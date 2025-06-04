
import { ListItemSchema, ListSchema, type List } from "../schemas/schemas";

import type { LoaderFunctionArgs } from "react-router";
import queryClient from "./queryClient";


export const getList = async (): Promise<List> => {
    return queryClient.fetchQuery({
        queryKey: ["list"],
        queryFn: async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await ListSchema.safeParseAsync(await response.json());
    
            if (!result.success) {
                throw new Error("Invalid data format: " + result.error.message);
            }
        
            return result.data;

        },
    });
}

export const getListById = async ({ params }: LoaderFunctionArgs ) : Promise<any> => {

    const id = params.id;

    return queryClient.fetchQuery({
        queryKey: ["list", id],
        queryFn: async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${id}`
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await ListItemSchema.safeParseAsync(await response.json());

            if (!result.success) {
                throw new Error("Invalid data format: " + result.error.message);
            }

            return result.data;
        },
    })
};
