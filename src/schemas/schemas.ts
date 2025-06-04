import { z } from "zod/v4";

export const ListItemSchema = z.object({
    id: z.number(),
    name: z.string(),
});

export const ListSchema = z.array(ListItemSchema);

export type ListItem = z.infer<typeof ListItemSchema>;
export type List = z.infer<typeof ListSchema>;

export const ContactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email(),
    message: z.string().min(1, "Message is required"),
});

export type Contact = z.infer<typeof ContactSchema>;






