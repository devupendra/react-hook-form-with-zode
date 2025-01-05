import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8, "Password should be atleast 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords are not same.",
    path: ["confirmPassword"],
  });
