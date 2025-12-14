import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(1, "Please enter you password"),
    agree: z
        .boolean()
        .refine((val) => val === true, {
            message: "You must agree to the terms",
        }),
});
