import { z } from 'zod'

export const userSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(2, { message: "Name should greater than or equal to 6 character" }),
    email: z.string().email().min(12, { message: "Email should be greater or equal to 12 characters" }),
})

export type TUserSchema = z.infer<typeof userSchema>;