import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required." })
    .email({ message: "Email must be a valid email." }),
  password: z.string().min(8, {
    message: "Password is required and must be at least 8 characters long.",
  }),
});
export type TLogin = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  username: z.string().min(1, { message: "Username is required." }),
  email: z
    .string()
    .email({ message: "Email must be a valid email." })
    .min(1, { message: "Email is required." }),
  password: z.string().min(8, {
    message: "Password is required and must be at least 8 characters long.",
  }),
});

export type TRegister = z.infer<typeof registerSchema>;
