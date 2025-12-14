import { z } from "zod";

export const profileSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(1, "Phone number is required"),
    birthdate: z.string().min(1, "Birthdate is required"),
    // alternative: z.coerce.date()
    sex: z.string().min(1, "Gender is required"),
    height: z.coerce.number().positive("Height is required"),
    heightUnit: z.string().optional().default('cm'),
    weight: z.coerce.number().positive("Weight is required"),
    weightTarget: z.coerce.number().positive("Target weight is required"),
    weightUnit: z.string().optional().default('kg'),
    waist: z.coerce.number().positive("Waist is required"),
    waistUnit: z.string().optional().default('cm'),
    bodyFat: z
        .coerce
        .number()
        .min(1, "Body fat must be at least 1%")
        .max(100, "Body fat cannot exceed 100%")
        .optional(),
});
