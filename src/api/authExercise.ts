
import { SecretsSchema, type Secrets } from "../schemas/schemas";

import queryClient from "./queryClient";
import { readFromSessionStorage } from "../utilities/localstorage";
import { redirect } from "react-router";



export const getSecrets = async (): Promise<Secrets | Response> => {

    const token = readFromSessionStorage("token");

    if (!token) {
        return redirect("/login") ;  
    }

    return queryClient.fetchQuery({
        queryKey: ["secrets"],
        queryFn: async () => {
            const response = await fetch(
                "http://localhost:4000/secrets",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                        "Authorization": `Bearer ${readFromSessionStorage("token") || ""}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await SecretsSchema.safeParseAsync(await response.json());
    
            if (!result.success) {
                throw new Error("Invalid data format: " + result.error.message);
            }


        
            return result.data;

        },
    });
}
