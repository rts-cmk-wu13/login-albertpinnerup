import { ContactSchema } from "../schemas/schemas";
import { z } from "zod/v4";
import type { ContactErrors } from "../types/contactTypes";
import { redirect } from "react-router";

export async function handleSubmit ({request}: { request: Request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const result = ContactSchema.safeParse(data);

    if (!result.success) {
  
        const zodError = z.treeifyError(result.error);
        return zodError.properties as ContactErrors;
        
    } 

        let response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(result.data),
        })

        if (!response.ok) {
            // Handle server error
            throw new Error("Could not save data");

        } 

        console.log("data was sent!!!")
        redirect("/")
    
};