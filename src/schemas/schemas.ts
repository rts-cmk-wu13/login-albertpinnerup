import { z } from "zod/v4";

export const SecretsItemSchema = z.object({
    id: z.number(),
    quote: z.string(),
    author: z.string(),
    origin: z.string(),
    
});

export const SecretsSchema = z.array(SecretsItemSchema);

export type SecretsItem = z.infer<typeof SecretsItemSchema>;
export type Secrets = z.infer<typeof SecretsSchema>;

export const ContactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email(),
    message: z.string().min(1, "Message is required"),
});

export type Contact = z.infer<typeof ContactSchema>;






