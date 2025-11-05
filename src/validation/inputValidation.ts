import { z } from 'zod';

const emailSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    confirmEmail: z.string().email({ message: "Invalid email address" }),
    
}).refine((data) => data.email === data.confirmEmail, {
    message: "Emails do not match",

})